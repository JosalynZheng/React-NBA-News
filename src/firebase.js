import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyC9VkfX4zsSznhmTMLq0bP5VpzgjHgXBKg",
    authDomain: "nba-fullstack-1c864.firebaseapp.com",
    databaseURL: "https://nba-fullstack-1c864.firebaseio.com",
    projectId: "nba-fullstack-1c864",
    storageBucket: "nba-fullstack-1c864.appspot.com",
    messagingSenderId: "334504805173",
    appId: "1:334504805173:web:ae3ad3ce8b2324999c027c",
    measurementId: "G-49EB9YGVHY"
  };

  firebase.initializeApp(firebaseConfig);

  const firebaseDB = firebase.database();
  const firebaseArticles = firebaseDB.ref('articles');
  const firebaseTeams = firebaseDB.ref('teams');
  const firebaseVideos = firebaseDB.ref('videos');

  const firebaseLooper = (snapshot) => {
        const data = [];
        snapshot.forEach((childSnapshot) =>{
            data.push({
                ...childSnapshot.val(),
                id: childSnapshot.key
            })
        });
        return data;
    }

  export{
      firebase,
      firebaseDB,
      firebaseArticles,
      firebaseVideos,
      firebaseTeams,
      firebaseLooper
  }