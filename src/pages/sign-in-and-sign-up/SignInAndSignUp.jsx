import React from 'react'
import './signInAndSignUp.styles.scss'
import SignIn from '../../components/sign-in/SignIn'
import SignUp from '../../components/signup/SignUp'

const SignInAndSignUp = () => {
  return (
    <div className="sign-in-and-sign-up">
      <SignIn />
      <SignUp />
    </div>
  )
}

export default SignInAndSignUp
