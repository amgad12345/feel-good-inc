import React, { Component, useState, useEffect } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faSignInAlt,
  faUserMd,
  faUserInjured,
} from '@fortawesome/free-solid-svg-icons'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import '../index.css'

const LogIn = props => {
  const [successfullyCreated, setSuccessfullyCreated] = useState(false)
  const [usernameFromApi, setUsernameFromApi] = useState('')

  const [user, setUser] = useState({
    email: '',
    password: '',
  })

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
    const resp = await axios.post(
      'https://doc-new-api.herokuapp.com/auth/login',
      user
    )
    console.log(resp.data)
    console.log(resp.data.token)
    console.log(resp.status)

    localStorage.setItem('token', resp.data.token)
    localStorage.setItem('expiresAt', resp.data.expirationTime)

    if (resp.status == 200) {
      props.setIsAuthed(true)
      setUsernameFromApi(resp.data.email)
    }
  }

  useEffect(() => {
    if (usernameFromApi) {
      setSuccessfullyCreated(true)
    }
  }, [usernameFromApi])

  return (
    <>
      {successfullyCreated ? (
        <Redirect to={`/Pickdoctor`} />
      ) : (
        <div className="container">
          <form onSubmit={submitForm} className="white">
            <section className="Doctor_Portal_Container">
              <FontAwesomeIcon className="faUserMd" icon={faUserInjured} />
            </section>
            <h5 className="sign_in">
              ACCOUNT LOGIN{' '}
              <FontAwesomeIcon className="faSignInAlt" icon={faSignInAlt} />
            </h5>

            <div className="input-feild">
              <label htmlFor="email"></label>
              <input
                className="inp"
                type="email"
                name="email"
                value={user.email}
                onChange={updateUser}
                placeholder="Email"
              ></input>
            </div>

            <div className="input-feild">
              <label htmlFor="password"></label>
              <input
                className="inp"
                type="password"
                id="password"
                name="password"
                onChange={updateUser}
                placeholder="Password"
              ></input>
            </div>

            <button className="log_in_btn">Log in</button>

            <span>
              {' '}
              <Link className="Doctor_Portal" to={`/DoctorPortal/${props.id}`}>
                {' '}
                <h5>DOCTOR PORTAL</h5>
              </Link>{' '}
            </span>
          </form>
        </div>
      )}
    </>
  )
}

export default LogIn
