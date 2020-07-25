import React, { useEffect } from 'react'
import './App.scss'
import HomePage from './pages/homepage/HomePage'
import { Route, Switch } from 'react-router-dom'
import ShopPage from './pages/shop/shop.component'
import Header from './components/header/Header'
import SignInAndSignUp from './pages/sign-in-and-sign-up/SignInAndSignUp'
import { auth, createUserProfileDocument } from './firebase/firebase.utils'
import { useDispatch, useSelector } from 'react-redux'
import { setCurrentUser } from './redux/user/user.actions'

function App() {
  const currentUser = useSelector(state => state.user.currentUser)
  const dispatch = useDispatch()

  useEffect(() => {
    let unsubscribe
    unsubscribe = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth)

        userRef.onSnapshot(snapShot => {
          dispatch(
            setCurrentUser({
              id: snapShot.id,
              ...snapShot.data(),
            })
          )
        })
      } else {
        dispatch(setCurrentUser(userAuth)) // null
      }
    })

    return () => {
      unsubscribe()
    }
  }, [dispatch])

  return (
    <>
      <Header currentUser={currentUser} />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/signin" component={SignInAndSignUp} />
      </Switch>
    </>
  )
}

export default App
