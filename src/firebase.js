import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDYrcPVp6hEABjPH3JCNhd9cYYtv64Nxxk",
  authDomain: "lofty-tokenizer-355612.firebaseapp.com",
  projectId: "lofty-tokenizer-355612",
  storageBucket: "lofty-tokenizer-355612.appspot.com",
  messagingSenderId: "934203307211",
  appId: "1:934203307211:web:00689644120f062ca6574e",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();

export default app;
