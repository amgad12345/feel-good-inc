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
              <Link to="/3">
                <button className="myButton " title={props.dentist}>
                  Dentist
                </button>
              </Link>
              <Link to="/4">
                <button className="myButton" title={props.generalpractitioner}>
                  general practitioner
                </button>
              </Link>
              <Link to="/5">
                <button className="myButton" title={props.Surgeon}>
                  Surgeon
                </button>
              </Link>
              <Link to="/6">
                <button className="myButton" title={props.Dermatologist}>
                  Dermatologist
                </button>
              </Link>
              <Link to="/7">
                <button className="myButton" title={props.Psychiatrist}>
                  Psychiatrist
                </button>
              </Link>
              <Link to="/8">
                <button className="myButton" title={props.Urologist}>
                  Urologist
                </button>
              </Link>
              <Link to="/9">
                <button className="myButton" title={props.Gynecologists}>
                  Gynecologists
                </button>
              </Link>
              <Link to="/10">
                <button className="myButton" title={props.Radiologists}>
                  Radiologists
                </button>
              </Link>
              <Link to="/11">
                <button className="myButton" title={props.Pathologists}>
                  Pathologists
                </button>
              </Link>
              <Link to="/12">
                <button className="myButton" title={props.Ophthalmologist}>
                  Ophthalmologist
                </button>
              </Link>
              <Link to="/13">
                <button className="myButton" title={props.Internists}>
                  Internists
                </button>
              </Link>
              <Link to="/14">
                <button className="myButton" title={props.Allergist}>
                  Allergist
                </button>
              </Link>
              <Link to="/15">
                <button className="myButton" title={props.Physician}>
                  Physician
                </button>
              </Link>
              <Link to="/16">
                <button className="myButton" title={props.Pediatrician}>
                  Pediatrician
                </button>
              </Link>
              <Link to="/17">
                <button className="myButton" title={props.Nephrologist}>
                  Nephrologist
                </button>
              </Link>
              <Link to="/18">
                <button className="myButton" title={props.Anesthesiologist}>
                  Anesthesiologist
                </button>
              </Link>
            </div>
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
        </>
      ) : (
        <Redirect to="/Unauthed" />
      )}
    </>
  )
}

export default PickDoctor
