import { setUserLoggedIn, setCurrentUser } from '../actions/auth'
const firebase = require("firebase")
require("firebase/firestore")

firebase.initializeApp({
  apiKey: 'AIzaSyAjZPzcfdZTwqcSw5cujnsckGVKVRuO7Ec',
  authDomain: 'book-tracker-f94c9.firebaseapp.com',
  projectId: 'book-tracker-f94c9'
})


let reduxStore = null
export const setReduxStore = (store) => reduxStore = store


var provider = new firebase.auth.GoogleAuthProvider()

export const login = () => {
  firebase.auth().signInWithRedirect(provider)
  .then(() => console.error('user = ', firebase.auth().currentUser))
}

firebase.auth().onAuthStateChanged((user) => {
  console.log('onAuthStateChanged')
  if (reduxStore) {
    reduxStore.dispatch(setCurrentUser(user))
    reduxStore.dispatch(setUserLoggedIn(!!user))
  }
})

export const isUserLoggedIn = () => !!firebase.auth().currentUser

export const logout = () => {
  firebase.auth().signOut().then(function() {
    // Sign-out successful.
    reduxStore.dispatch(setCurrentUser(null))
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
    return {
      id: docRef.id,
      title,
      author
    }
  })
  .catch(function(error) {
    console.error("Error adding document: ", error)
  })
}

export const updateBook = (bookId, fieldsToUpdate) => {
  return db.collection("books").doc(bookId).update(fieldsToUpdate)
  .then(function() {
      console.log("Document successfully updated!")
  })
  .catch(function(error) {
      // The document probably doesn't exist.
      console.error("Error updating document: ", error)
  })
}

export const deleteBook = (bookId) => updateBook(bookId, { deletedOn: new Date() })
