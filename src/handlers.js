const { nanoid } = require('nanoid');
const storeData = require("../service/storeData.js");
const InputError = require("../error/inputError.js");
const hashPassword = require("../service/hashPassword.js");
const checkUserExist = require("../service/checkUser.js");
const checkEmailExist = require("../service/checkEmail.js");
const comparePassword = require("../service/validatePassword.js");



const getHome = () => {
  return "Hewwo world";
};

// const getProfile = async (request, h) => {
//   const userId = request.params.userId;

//   const profile = await firestore.collection('users').doc(userId).get();

//   if (profile === undefined) {
//     return h.response('User not found').code(404);
//   }

//   const userData = userDoc.data();
//   return h.response(userData).code(400);
// }

const registration = async (request, h) => {
  try {
    const { email, phone, name, birthdate, password, username } = request.payload;

    const id = nanoid(10);
    const createdAt = new Date().toISOString();

    const hashedPassword = await hashPassword(password);

    const userExist = await checkUserExist(username);
    const emailExist = await checkEmailExist(email);

    const data = {
      id,
      email,
      phone,
      name,
      birthdate,
      hashedPassword,
      username,
      createdAt,
    };

    if (emailExist) {
      return h.response({ message: 'Email already exists' }).code(400);
    }
    if (userExist) {
      return h.response({ message: 'Username already exists' }).code(400);
    }

    await storeData(id, data);
    console.log("data", data);
    return h.response({
      status: 'success',
      message: "registration successfully",
      data,
    }).code(201);
  } catch (error) {
    throw new InputError('Registrasi gagal', 400);
  }
};

//error logic
const login = async (request, h) => {
  try {
    const { email, password} = request.payload;

    const emailExist = await checkEmailExist(email);
    if (!emailExist) {
      return h.response({ message: 'Invalid username or password' }).code(400);
    }

    //error argument password hash
    const isValidPassword = await comparePassword(password, emailExist.password);
    if (!isValidPassword) {
      return h.response({ message: 'Invalid email or password' }).code(400);
    }

    return h.response({
      status: 'success',
      message: 'login successfully',
    }).code(201);
    

  } catch (error) {
    throw new InputError('Login Gagal', 400);
  }
}


module.exports = { getHome, registration, login};
