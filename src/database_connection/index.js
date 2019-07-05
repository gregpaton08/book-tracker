const firebase = require("firebase")
require("firebase/firestore")

firebase.initializeApp({
  apiKey: 'AIzaSyAjZPzcfdZTwqcSw5cujnsckGVKVRuO7Ec',
  authDomain: 'book-tracker-f94c9.firebaseapp.com',
  projectId: 'book-tracker-f94c9'
})


var provider = new firebase.auth.GoogleAuthProvider()

export const getUser = () => console.error('user = ', firebase.auth().currentUser)

export const login = () => {
  firebase.auth().signInWithRedirect(provider)
  .then(() => console.error('user = ', firebase.auth().currentUser))
}

export const logout = () => {
  firebase.auth().signOut().then(function() {
    // Sign-out successful.
  }).catch(function(error) {
    // An error happened.
  })
}

var db = firebase.firestore()

export const readBooks = () => {
  return db.collection("books").get().then((querySnapshot) => {
    const books = []
    querySnapshot.forEach((doc) => {
      books.push({ id: doc.id, ...doc.data() })
    })
    return books
  })
}

export const addBook = (title, author) => {
  return db.collection("books").add({
    title,
    author
  })
  .then(function(docRef) {
    console.log("Document written with ID: ", docRef.id)
  })
  .catch(function(error) {
    console.error("Error adding document: ", error)
  })
}

export const deleteBook = (bookId) => {
  return db.collection("books").doc(bookId).delete().then(() => {
    console.log("Document successfully deleted!")
  }).catch((error) => {
    console.error("Error removing document: ", error)
  })
}
