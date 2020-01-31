import React, { Component, useState, useEffect } from 'react'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus ,faBriefcaseMedical } from '@fortawesome/free-solid-svg-icons'
import '../index.css'

const DocSignUp = () => {
  const [user, setUser] = useState({
    password: '',
    username: '',
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
    const resp = await axios.post('https://doc-new-api.herokuapp.com/Docauth/Docsignup', {
      ...user,                      
    })
    console.log(resp.data)
    console.log(resp.status)
    localStorage.setItem('token', resp.data.token)
    localStorage.setItem('expiresAt', resp.data.expirationTime)
    if (resp.status == 200) {
      setAppMessage(true)
    } else {

      setAppMessage(false)
    }
  }

  return (
    <div className="container">
      <form onSubmit={submitForm} className="Doc_white_signup">
      {showAppMessage && (
                <div>
                  <h1 id = "Signup_Msg_Id"  className="Signup_Msg">SIGN UP SUCCESFUL</h1>
                </div>
              )}
        <FontAwesomeIcon id = "Brief"  icon={faBriefcaseMedical} />
        <h5 className="sign_up" id = "Doc_Text_Signup">SIGN UP</h5>
        <div className="input-feild">
          <label htmlFor="username"></label>
          <input
            className="inp"
            type="text"
            value={user.username}
            onChange={updateUser}
            placeholder="ID"
            name="username"
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
          <button className="sign_up_btn" id = "sign_up_btn_doc">Sign up</button>
        </div>
      </form>
    </div>
  )
}

export default DocSignUp
