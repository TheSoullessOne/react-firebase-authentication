import app from 'firebase/app'
import 'firebase/auth';
import 'firebase/database';

const config = {
    apiKey: 'AIzaSyB_SBWc4Rci-qFRvvb4Bus9e4OLXc1NpfU',
    authDomain: 'react-firebase-authentic-6b5ac.firebaseapp.com',
    databaseURL: 'https://react-firebase-authentic-6b5ac.firebaseio.com',
    projectId: 'react-firebase-authentic-6b5ac',
    storageBucket: '',
    messagingSenderId: '2853878551',
};

class Firebase {
    constructor()   {
        app.initializeApp(config);

        this.auth = app.auth();
        this.db = app.database();
    }

    // *** AUTH API ***
    doCreateUserWithEmailAndPassword = (email, password) =>
        this.auth.createUserWithEmailAndPassword(email, password);

    doSignInWithEmailAndPassword = (email, password) =>
        this.auth.signInWithEmailAndPassword(email, password);

    doSignOut = () => this.auth.signOut();

    doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

    doPasswordUpdate = password =>
        this.auth.currentUser.updatePassword(password);

        // *** USER API ***

        user = uid => this.db.ref(`users/${uid}`);

        users = () => this.db.ref('users');
        
}

export default Firebase;