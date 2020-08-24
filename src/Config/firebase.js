import firebase from 'firebase';


const firebaseConfig = {
    apiKey: "AIzaSyC4gOhwM0eQgd8LqLz72jFtQT6lVPsebHY",
    authDomain: "fichas-pabe-delta.firebaseapp.com",
    databaseURL: "https://fichas-pabe-delta.firebaseio.com",
    projectId: "fichas-pabe-delta",
    storageBucket: "fichas-pabe-delta.appspot.com",
    messagingSenderId: "665181838607",
    appId: "1:665181838607:web:2a7c8f6c6fa169a544f27a",
    measurementId: "G-V7P57R9WWV"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp;

