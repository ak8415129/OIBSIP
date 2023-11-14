const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyD4bvScUI95SS02fMabFLqRDyT29ehnwzY",
  authDomain: "login-with-firebase-5a05c.firebaseapp.com",
  databaseURL: "https://login-with-firebase-5a05c-default-rtdb.firebaseio.com",
  projectId: "login-with-firebase-5a05c",
  storageBucket: "login-with-firebase-5a05c.appspot.com",
  messagingSenderId: "958088436041",
  appId: "1:958088436041:web:12792c550e51c813ae6298"
  });

  const db = firebaseApp.firestore();
  const auth = firebaseApp.auth();
  
  // Sign up function
  const signUp = () => {
      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;
      console.log(email, password)
      // firebase code
      firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((result) => {
        // Signed in 
        document.write("You are Signed Up")
        console.log(result)
        // ...
    })
    .catch((error) => {
        console.log(error.code);
        console.log(error.message)
        // ..
    });
  }
  
  // Sign In function
  const signIn = () => {
      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;
      // firebase code
      firebase.auth().signInWithEmailAndPassword(email, password)
          .then((result) => {
            // Signed in 
            document.write("You are Signed In")
            console.log(result)
        })
        .catch((error) => {
            console.log(error.code);
            console.log(error.message)
        });
  }  