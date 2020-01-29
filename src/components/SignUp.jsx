import React, { Component, useState, useEffect } from 'react'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus } from '@fortawesome/free-solid-svg-icons'
import '../index.css'

const SignUp = props => {
  const [user, setUser] = useState({
    FirstName: '',
    LastName: '',
    password: '',
    email: '',
    Id: 0,
  })

  const [showAppMessage, setAppMessage] = useState(false)

  const showAppMessageFunc = () => {
    if (!showAppMessage) {
      setAppMessage(true)
    } else {
      setAppMessage(false)
    }
  }

  const setUserName = e => {
    setUserName(e.target.value)
  }

  const updateUser = e => {
    e.persist()
    setUser(prev => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      }
    })
  }

  const submitForm = async e => {
    e.preventDefault()
    const resp = await axios.post('https://localhost:5001/auth/signup', user)
    console.log(resp.data)
    console.log(resp.status)
    localStorage.setItem('token', resp.data.token)
    localStorage.setItem('expiresAt', resp.data.expirationTime)
    if (resp.status == 200) {
      props.setIsAuthed(true)
      setAppMessage(true)
    } else {
      setAppMessage(false)
    }
  }

  return (
    <div className="container">
      <form onSubmit={submitForm} className="white_signup">
        {showAppMessage && (
          <div>
            <h1 id="Signup_Msg_Id" className="Signup_Msg">
              SIGN UP SUCCESFUL
            </h1>
          </div>
        )}
        <FontAwesomeIcon className="faUserPlus" icon={faUserPlus} />
        <h5 className="sign_up">SIGN UP</h5>
        <div className="input-feild">
          <label htmlFor="Firstname"></label>
          <input
            className="inp"
            type="text"
            value={user.FirstName}
            onChange={updateUser}
            placeholder="First Name"
            name="FirstName"
          ></input>
        </div>
        <div className="input-feild">
          <label htmlFor="lastname"></label>
          <input
            className="inp"
            type="text"
            value={user.LastName}
            onChange={updateUser}
            placeholder="last Name"
            name="LastName"
          ></input>
        </div>
        <div className="input-feild">
          <label htmlFor="email"></label>
          <input
            className="inp"
            type="email"
            value={user.email}
            onChange={updateUser}
            placeholder="Email"
            name="email"
          ></input>
        </div>
        <div className="input-feild">
          <label htmlFor="password"></label>
          <input
            className="inp"
            type="password"
            value={user.password}
            onChange={updateUser}
            placeholder="Password"
            name="password"
          ></input>
        </div>
        <div className="input-feild">
          <button  className="sign_up_btn">Sign up</button>
        </div>
      </form>
    </div>
  )
}

export default SignUp
