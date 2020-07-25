import React, { useState, useEffect } from 'react'
import './App.scss'
import HomePage from './pages/homepage/HomePage'
import { Route, Switch } from 'react-router-dom'
import ShopPage from './pages/shop/shop.component'
import Header from './components/header/Header'
import SignInAndSignUp from './pages/sign-in-and-sign-up/SignInAndSignUp'
import { auth } from './firebase/firebase.utils'

function App() {
  const [currentUser, setCurrentUser] = useState(null)

  useEffect(() => {
    let unsubscribe
    unsubscribe = auth.onAuthStateChanged(user => {
      setCurrentUser(user)
      console.log(user)
    })
    return () => {
      unsubscribe()
    }
  }, [])

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
