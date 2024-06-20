const { Firestore } = require('@google-cloud/firestore');

const db = new Firestore({
    keyFilename: process.env.GOOGLE_APPLICATION_CREDENTIALS,
    projectId: 'carakamobile-c241-pr556',
    databaseId: 'caraka',
  });

const getUserProfileHandler = async (request, h) => {
    const userId = request.auth.credentials.user.id;
    console.log(userId);
    const userRef = db.collection('userTest').doc(userId);
    const userDoc = await userRef.get();

    if (!userDoc.exists) {
        return h.response({ message: 'User not found' }).code(404);
    }

    return userDoc.data();
};

module.exports = {
    getUserProfileHandler
};
