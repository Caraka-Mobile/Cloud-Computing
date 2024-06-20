const Firestore = require('@google-cloud/firestore');

const db = new Firestore({
    keyFilename: process.env.GOOGLE_APPLICATION_CREDENTIALS,
    projectId: 'carakamobile-c241-pr556',
    databaseId: 'caraka',
  });



const getUserFromEmail = async (email) => {
    try {
        const usersRef = db.collection('userTest');
        const query = usersRef.where('email', '==', email);
        const snapshot = await query.get();

        if (snapshot.empty) {
            return null;
        }

        let user = null;
        snapshot.forEach(doc => {
            user = { id: doc.id, ...doc.data() };
        });

        return user;
    } catch (error) {
        console.error('Error checking user existence:', error);
        throw error;
    }
};

module.exports = getUserFromEmail;