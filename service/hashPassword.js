const bcrypt = require('bcrypt');

const saltRound = 10;

const hashPassword = async (password) => {
    try {
        const hashedPassword = await bcrypt.hash(password, saltRound);
        return hashedPassword;
    } catch (error) {
        console.error('Error hashing password: ', error);
        throw error;
    }
};

module.exports = hashPassword;