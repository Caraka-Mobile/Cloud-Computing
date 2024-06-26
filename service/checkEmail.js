const Firestore = require('@google-cloud/firestore');

const checkEmail = async (email) => {
    try {
        const db = new Firestore({
            keyFilename: process.env.GOOGLE_APPLICATION_CREDENTIALS,
            projectId: 'carakamobile-c241-pr556',
            databaseId: 'caraka',
          });


        const usersRef = db.collection('userTest');
        const query = usersRef.where('email', '==', email);
        const snapshot = await query.get();

        return !snapshot.empty;
    } catch (error) {
        console.error('Error checking user existance: ', error);
        throw error;
    }

};

module.exports = checkEmail;