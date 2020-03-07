
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBNyCFcYYNOv1sA6oDMHZURCCmN9id8ko8",
    authDomain: "form-253e5.firebaseapp.com",
    databaseURL: "https://form-253e5.firebaseio.com",
    projectId: "form-253e5",
    storageBucket: "form-253e5.appspot.com",
    messagingSenderId: "784864537933",
    appId: "1:784864537933:web:9e57620637a787e78e1b04"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const auth = firebase.auth();

  function signUp(){
      var email = document.getElementById("email");
      var password = document.getElementById("password");
    
      const promise = auth.signInWithEmailAndPassword(email.value, password.value);
    promise.catch(e => alert(e.message));

      alert("Sign Up");
  }

  function signIn(){

    var email = document.getElementById("email");
    var password = document.getElementById("passweord");

    const promise = auth.signInWithEmailAndPassword(email.value, password.value);
    promise.catch(e => alert(e.message));

    alert("Signed In"+ email);

    //Take user to a different page

  }

  function signOut(){

    auth.signOut();
    alert("Signed Out");
  }

  auth.onAuthStateChanged(function(user){
    if(user){
      var email = user.email;
      alert("Active user" + email);
      //is signed in
    }else{
      alert("No Active User");
      //no user is signed in
    }
    
  });
