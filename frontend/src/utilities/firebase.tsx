import { initializeApp } from 'firebase/app'
import { getAuth }  from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: 'AIzaSyCoXj7o34wrHKI4g9jpUoz9-0UfUJHSbE8',
    authDomain: 'pintado-database.firebaseapp.com',
    projectId: 'pintado-database',
    storageBucket: 'pintado-database.appspot.com',
    messagingSenderId: '157074934143',
    appId: '1:157074934143:web:aadaaed85495b04de7f24a',
    measurementId: 'G-NZ17X6834J'
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
export  const auth = getAuth(app)