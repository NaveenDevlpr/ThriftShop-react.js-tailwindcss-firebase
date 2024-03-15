
import { initializeApp,getApps,getApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDhSfGtXDlwUFaOvn9PPiGq7PPzYBoYCsk",
  authDomain: "thrift-72e1c-aa358.firebaseapp.com",
  projectId: "thrift-72e1c",
  storageBucket: "thrift-72e1c.appspot.com",
  messagingSenderId: "498368509614",
  databaseURL:"https://thrift-72e1c-default-rtdb.asia-southeast1.firebasedatabase.app/",
  appId: "1:498368509614:web:cacbf81cda50b28231df3f",
  measurementId: "G-N99P209EZE"
};


export const app = getApps.length>0?getApp():initializeApp(firebaseConfig);

export const auth=getAuth(app)
