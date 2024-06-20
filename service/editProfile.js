const { Firestore } = require('@google-cloud/firestore');
const hashPassword = require('./hashPassword.js');

const db = new Firestore({
    keyFilename: process.env.GOOGLE_APPLICATION_CREDENTIALS,
    projectId: 'submissionmlgc-mohadibsyambudi',
    databaseId: 'predictions',
  });

const editProfile = async (request, h) => {
    const userId = request.auth.credentials.user.id;
    const { email, password } = request.payload;

    if (!email && !password) {
        return h.response({ message: 'Email or password is required' }).code(400);
    }

    try {
        const userRef = db.collection('userTest').doc(userId);
        const updates = {};

        if (email) {
            updates.email = email;
        }

        if (password) {
            const hashedPassword = await hashPassword(password);
            updates.password = hashedPassword;
        }

        await userRef.update(updates);

        return h.response({ message: 'Profile updated' }).code(200);
    } catch (error) {
        console.error('Error updating profile:', error);
        return h.response({ message: 'Failed to update profile', error }).code(500);
    }
}

module.exports = {
    editProfile
};
