import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: 'AIzaSyBtdsZfOHSw4r11mGq0mQ7uMLFBdGYq5Z8',
    authDomain: 'catch-of-the-day-ae36a.firebaseapp.com',
    databaseURL: 'https://catch-of-the-day-ae36a.firebaseio.com'
});

const base = Rebase.createClass(firebaseApp.database());

// This is a named export
export { firebaseApp };

// this is a default export
export default base;
