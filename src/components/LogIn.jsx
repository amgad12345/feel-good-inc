import React, { Component, useState, useEffect } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignInAlt, faUserMd } from '@fortawesome/free-solid-svg-icons'
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
    const resp = await axios.post('https://localhost:5001/auth/login', user)
    console.log(resp.data)
    console.log(resp.data.token)
    console.log(resp.status)

    localStorage.setItem('token', resp.data.token)
    localStorage.setItem('expiresAt', resp.data.expirationTime)
    // redirect to the secret
    if (resp.status == 200) {
      setUsernameFromApi(resp.data.username)
      //TODO store the toke in local storage

      window.location.href = 'http://localhost:3000/2'
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
        <Redirect to={`/secret/${usernameFromApi}`} />
      ) : (
        <div className="container">
          <form onSubmit={submitForm} className="white">
            <section className="Doctor_Portal_Container">
              <FontAwesomeIcon className="faUserMd" icon={faUserMd} />
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
          <footer>
            <section className="social_container">
              <h3 className="Follow">Follow Us</h3>
              <a className="social_icons" href="https://www.facebook.com/">
                <h4 class="fa fa-facebook"></h4>
              </a>
              <a
                className="social_icons"
                href="https://www.instagram.com/?hl=en"
              >
                <h4 class="fa fa-instagram"></h4>
              </a>
              <a className="social_icons" href="https://twitter.com/?lang=en">
                <h4 class="fa fa-twitter"></h4>
              </a>
            </section>
            <section className="middle">
              <a href="#" className="mid">
                <h4>Copyright © 2019</h4>
              </a>
              <a href="#" className="mid">
                <h4>Privacy Policy</h4>
              </a>
              <a href="#" className="mid">
                <h4>Contact us</h4>
              </a>
              <a href="#" className="mid">
                <h4> Amgad Behman & Associates</h4>
              </a>
              <a href="#" className="mid">
                <h4>Sitemap</h4>
              </a>
            </section>
          </footer>
        </div>
      )}
    </>
  )
}

export default LogIn
