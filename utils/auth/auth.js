const jwt = require('jsonwebtoken');

const jwtSecret = process.env.JWT_SECRET_KEY;

const createToken = (user) => {
    return jwt.sign({ id: user.id, email: user.email }, jwtSecret, { expiresIn: '1h' });
};

const verifyToken = (token) => {
    try {
        return jwt.verify(token, jwtSecret);
    } catch (err) {
        throw new Error('Invalid token');
    }
};

module.exports = {
    createToken,
    verifyToken
};