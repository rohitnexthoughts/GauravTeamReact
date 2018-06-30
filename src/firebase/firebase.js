import firebase from 'firebase/app';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAjmVVkoad0kXE3liJQUdXzEQEKzY66Tv4",
    authDomain: "hack1-48fcc.firebaseapp.com",
    databaseURL: "https://hack1-48fcc.firebaseio.com",
    projectId: "hack1-48fcc",
    storageBucket: "hack1-48fcc.appspot.com",
    messagingSenderId: "1027698656057"
};

if (!firebase.apps.length) {
    firebase.initializeApp(config);
}

const auth = firebase.auth();

export {
    auth,
};