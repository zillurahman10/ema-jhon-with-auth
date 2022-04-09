import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
const firebaseConfig = {
    apiKey: "AIzaSyCq6CizD5y4nF_LTIWB6vZoHgaJX7ViePU",
    authDomain: "ema-jhon-simple-cc146.firebaseapp.com",
    projectId: "ema-jhon-simple-cc146",
    storageBucket: "ema-jhon-simple-cc146.appspot.com",
    messagingSenderId: "212455601013",
    appId: "1:212455601013:web:995601a59361882373193c"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;