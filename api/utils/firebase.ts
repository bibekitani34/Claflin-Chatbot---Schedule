import firebase_config from "./firebase.config.json";
import firebase from "firebase/app";

import "firebase/firestore";

const app = firebase.initializeApp(firebase_config);
export const db = app.firestore();
