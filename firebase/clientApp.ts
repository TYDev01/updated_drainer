// import firebase from '@firebase/app';
import { initializeApp, getApps, getApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// import 'firebase/auth';
// import 'firebase/firestore';

const clientCredentials = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
    databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL
};

// if (!firebase.  ) {
//     firebase.initializeApp(clientCredentials);
// }
const app = !getApps().length ? initializeApp(clientCredentials) : getApp();
const database = getDatabase(app);

export {database};
