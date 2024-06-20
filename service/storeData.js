const Firestore = require('@google-cloud/firestore');

const storeData = async (id, data) => {
  const db = new Firestore({
    keyFilename: process.env.GOOGLE_APPLICATION_CREDENTIALS,
    projectId: 'carakamobile-c241-pr556',
    databaseId: 'caraka',
  });

  const predictCollection = db.collection('userTest');

  return predictCollection.doc(id).set(data);
};


module.exports = storeData;
