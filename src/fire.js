import firebase from 'firebase'

// Initialize Firebase
var config = {
  apiKey: "AIzaSyBMQXpWyMZR_NjxMBZTv3ZzAt_1KNAJcuU",
  authDomain: "kangaroo-dfe73.firebaseapp.com",
  databaseURL: "https://kangaroo-dfe73.firebaseio.com",
  projectId: "kangaroo-dfe73",
  storageBucket: "kangaroo-dfe73.appspot.com",
  messagingSenderId: "571720242263"
};
var fire = firebase.initializeApp(config);
export default fire;
