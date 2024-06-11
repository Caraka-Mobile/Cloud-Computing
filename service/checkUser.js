const Firestore = require('@google-cloud/firestore');

const checkUser = async (username) => {
    try {
        const db = new Firestore({
            keyFilename: process.env.GOOGLE_APPLICATION_CREDENTIALS,
            projectId: 'submissionmlgc-mohadibsyambudi',
            databaseId: 'predictions',
          });


        const usersRef = db.collection('userTest');
        const query = usersRef.where('username', '==', username);
        const snapshot = await query.get();

        return !snapshot.empty;
    } catch (error) {
        console.error('Error checking user existance: ', error);
        throw error;
    }

};

module.exports = checkUser