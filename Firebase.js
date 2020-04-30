import * as firebase from 'firebase';
import firestore from 'firebase/firestore'

//const settings = {timestampsInSnapshots: true};

const config = {
    apiKey: "AIzaSyCNVjWvK72q8Y--WmTn57gsNoOfVW0LBPc",
    authDomain: "sci-synapse.firebaseapp.com",
    databaseURL: "https://sci-synapse.firebaseio.com",
    projectId: "sci-synapse",
    storageBucket: "sci-synapse.appspot.com",
    messagingSenderId: "161650899494"
};
firebase.initializeApp(config);


export default firebase;
