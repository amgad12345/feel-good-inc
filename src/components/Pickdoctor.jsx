import React, { useState, useEffect } from 'react'
import { Link, Redirect } from 'react-router-dom'

import DoctorDiscription from '../components/DoctorDiscription'

const PickDoctor = props => {
  const [isAuthenticated, setIsAuthenticated] = useState(true)
  useEffect(() => {
    const token = localStorage.getItem('token')
    if (!token) {
      setIsAuthenticated(false)
    }
  }, [])
  return (
    <>
      {isAuthenticated ? (
        <>
          <div className="container">
            <div className="doctors_container">
              <Link to="/Dentists">
                <button  className="myButton " title={props.dentist}>
                  Dentist
                </button>
              </Link>
              <Link to="/GeneralPractitioner">
                <button className="myButton" title={props.generalpractitioner}>
                  general practitioner
                </button>
              </Link>
              <Link to="/Surgeon">
                <button className="myButton" title={props.Surgeon}>
                  Surgeon
                </button>
              </Link>
              <Link to="/Dermatologist">
                <button className="myButton" title={props.Dermatologist}>
                  Dermatologist
                </button>
              </Link>
              <Link to="/Psychiatrist">
                <button className="myButton" title={props.Psychiatrist}>
                  Psychiatrist
                </button>
              </Link>
              <Link to="/Urologist">
                <button className="myButton" title={props.Urologist}>
                  Urologist
                </button>
              </Link>
              <Link to="/Gynecologists">
                <button className="myButton" title={props.Gynecologists}>
                  Gynecologists
                </button>
              </Link>
              <Link to="/Radiologists">
                <button className="myButton" title={props.Radiologists}>
                  Radiologists
                </button>
              </Link>
              <Link to="/Pathologists">
                <button className="myButton" title={props.Pathologists}>
                  Pathologists
                </button>
              </Link>
              <Link to="/Ophthalmologist">
                <button className="myButton" title={props.Ophthalmologist}>
                  Ophthalmologist
                </button>
              </Link>
              <Link to="/Internists">
                <button className="myButton" title={props.Internists}>
                  Internists
                </button>
              </Link>
              <Link to="/Allergist">
                <button className="myButton" title={props.Allergist}>
                  Allergist
                </button>
              </Link>
              <Link to="/Physician">
                <button className="myButton" title={props.Physician}>
                  Physician
                </button>
              </Link>
              <Link to="/Pediatrician">
                <button className="myButton" title={props.Pediatrician}>
                  Pediatrician
                </button>
              </Link>
              <Link to="/Nephrologist">
                <button className="myButton" title={props.Nephrologist}>
                  Nephrologist
                </button>
              </Link>
              <Link to="/Anesthesiologist">
                <button className="myButton" title={props.Anesthesiologist}>
                  Anesthesiologist
                </button>
              </Link>
            </div>
            
          </div>
        </>
      ) : (
        <Redirect to="/Unauthed" />
      )}
    </>
  )
}

export default PickDoctor
