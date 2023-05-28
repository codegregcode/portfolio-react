import firebase from 'firebase/app';

import 'firebase/firestore';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,

  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,

  databaseUrl: process.env.REACT_APP_FIREBASE_DB_URL,

  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,

  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,

  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,

  appId: process.env.REACT_APP_FIREBASE_APP_ID,

  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

const getPhotos = async () => {
  const querySnapshot = await db.collection('photos').get();

  const photos = [];
  querySnapshot.forEach((doc) => {
    const photo = doc.data();
    photos.push(photo);
  });

  return photos;
};

const getProjects = async () => {
  const querySnapshot = await db.collection('projects').get();

  const projects = [];
  querySnapshot.forEach((doc) => {
    const project = doc.data();
    projects.push(project);
  });

  return projects;
};

const getMusic = async () => {
  const querySnapshot = await db.collection('music').get();

  const musicArr = [];
  querySnapshot.forEach((doc) => {
    const music = doc.data();
    musicArr.push(music);
  });
  return musicArr;
};

export { getPhotos, getProjects, getMusic };
