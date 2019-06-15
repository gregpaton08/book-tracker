const firebase = require("firebase")
require("firebase/firestore")

firebase.initializeApp({
  apiKey: 'AIzaSyAjZPzcfdZTwqcSw5cujnsckGVKVRuO7Ec',
  authDomain: 'book-tracker-f94c9.firebaseapp.com',
  projectId: 'book-tracker-f94c9'
})

var db = firebase.firestore()

export const readBooks = () => {
  return db.collection("books").get().then((querySnapshot) => {
    const books = []
    querySnapshot.forEach((doc) => {
      books.push(doc.data())
      console.log(`${doc.id} => ${JSON.stringify(doc.data())}`)
    })
    return books
  })
}

export const addBook = (title, author) => {
  db.collection("books").add({
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
