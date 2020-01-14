import React, { Component, useState, useEffect } from 'react'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus } from '@fortawesome/free-solid-svg-icons'
import '../index.css'

const SignUp = () => {
  const [user, setUser] = useState({
    FirstName: '',
    LastName: '',
    password: '',
    email: '',
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
    const resp = await axios.post('https://localhost:5001/auth/signup', user)
    console.log(resp.data)
    localStorage.setItem('token', resp.data.token)
    localStorage.setItem('expiresAt', resp.data.expirationTime)
  }

  return (
    <div className="container">
      <form onSubmit={submitForm} className="white_signup">
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
          <button className="sign_up_btn">Sign up</button>
        </div>
      </form>
      <footer>
        <section className="social_container">
          <h3 className="Follow">Follow Us</h3>
          <a className="social_icons" href="https://www.facebook.com/">
            <h4 class="fa fa-facebook"></h4>
          </a>
          <a className="social_icons" href="https://www.instagram.com/?hl=en">
            <h4 class="fa fa-instagram"></h4>
          </a>
          <a className="social_icons" href="https://twitter.com/?lang=en">
            <h4 class="fa fa-twitter"></h4>
          </a>
        </section>
        <a href="#">
          <h4> Copyright © 2019 </h4>
        </a>
        <a href="#">
          <h4>Privacy Policy</h4>
        </a>
        <a href="#">
          <h4>Contact us</h4>
        </a>
        <a href="#">
          <h4> Amgad Behman & Associates</h4>
        </a>
        <a href="#">
          <h4>Sitemap</h4>
        </a>
      </footer>
    </div>
  )
}

export default SignUp
