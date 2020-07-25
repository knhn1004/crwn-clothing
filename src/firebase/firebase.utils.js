import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
  apiKey: 'AIzaSyBiBfMKam4g1iY592kHwPmFv0IbwhY6HfU',
  authDomain: 'crwn-db-9c110.firebaseapp.com',
  databaseURL: 'https://crwn-db-9c110.firebaseio.com',
  projectId: 'crwn-db-9c110',
  storageBucket: 'crwn-db-9c110.appspot.com',
  messagingSenderId: '612405801509',
  appId: '1:612405801509:web:05dc08a96302e17c1d05cc',
}

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return

  const userRef = firestore.doc(`users/${userAuth.uid}`)

  const snapShot = await userRef.get()

  if (!snapShot.exists) {
    const { displayName, email } = userAuth
    const createdAt = new Date()

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      })
    } catch (error) {
      console.log('error creating user', error)
    }
  }

  return userRef
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({
  prompt: 'select_account',
})

export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
