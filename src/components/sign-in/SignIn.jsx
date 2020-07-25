import React, { useState } from 'react'
import FormInput from '../form-input/FormInput'
import './sign-in.styles.scss'
import CustomButton from '../custom-button/CustomButton'
import { auth, signInWithGoogle } from '../../firebase/firebase.utils'

const SignIn = () => {
  const initialValues = { email: '', password: '' }
  const [state, setState] = useState(initialValues)
  const { email, password } = state

  const handleSubmit = async e => {
    e.preventDefault()

    try {
      await auth.signInWithEmailAndPassword(email, password)
      setState(initialValues)
    } catch (e) {
      console.error('unable to sign in', e)
    }
  }

  const handleChange = e => {
    e.persist()
    const { value, name } = e.target
    setState({ ...state, [name]: value })
  }

  return (
    <div className="sign-in">
      <h2 className="title">I already have an account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="email"
          name="email"
          type="email"
          value={email}
          required
          onChange={handleChange}
        />
        <FormInput
          label="password"
          name="password"
          type="password"
          value={password}
          onChange={handleChange}
          required
        />

        <div className="buttons">
          <CustomButton type="submit">SIGN IN</CustomButton>
          <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
            SIGN IN WITH GOOGLE
          </CustomButton>
        </div>
      </form>
    </div>
  )
}

export default SignIn
