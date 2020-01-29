import React, { Component, useState, useEffect } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignInAlt, faUserMd } from '@fortawesome/free-solid-svg-icons'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import '../index.css'

const DoctorLogin = (props) => {



  const [successfullyCreated, setSuccessfullyCreated] = useState(false)
  const [usernameFromApi, setUsernameFromApi] = useState('')
 
  const [user, setUser] = useState({
    username: '',
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
    const resp = await axios.post('https://doc-new-api.herokuapp.com/Docauth/Doclogin', user)
    console.log(resp.data)
    console.log(resp.data.doctorId)
    console.log(resp.data.token)
    console.log(resp.status)
    
    localStorage.setItem('token', resp.data.token)
    localStorage.setItem('expiresAt', resp.data.expirationTime)
    // redirect to the secret
    if (resp.status == 200) {
      setUsernameFromApi(resp.data.username)
      //TODO store the toke in local storage
      
        window.location.href = `http://localhost:3000/SingleDoctorPortal/${resp.data.doctorId}`;
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
            <FontAwesomeIcon className="faUserMd" icon={faUserMd} />
            <h5 className="sign_in">
              ACCOUNT LOGIN{' '}
              <FontAwesomeIcon className="faSignInAlt" icon={faSignInAlt} />
            </h5>

            <div className="input-feild">
              <label htmlFor="username"></label>
              <input
                className="inp"
                type="text"
                id="username"
                name="username"
                value={user.username}
                onChange={updateUser}
                placeholder="username"
              ></input>
            </div>

            <div className="input-feild">
              <label htmlFor="password"></label>
              <input
                className="inp"
                type="password"
                id="password"
                name="password"
                value={user.password}
                onChange={updateUser}
                placeholder="Password"
              ></input>
            </div>

            <div className="input-feild">
              <button className="log_in_btn">Log in</button>
              <span>
              {' '}
              <Link className="Doctor_Portal" to={"/DocSignUp"}>
                {' '}
                <h5>DOCTOR SIGN UP</h5>
              </Link>{' '}
            </span>
            </div>
          </form>
        </div>
      )}
    </>
  )
}




export default DoctorLogin 