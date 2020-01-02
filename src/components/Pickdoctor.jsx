import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import DoctorDiscription from '../components/DoctorDiscription'

class Pickdoctor extends DoctorDiscription {
  constructor() {
    super()
    
  }

  render() {
    return (
      <div className="container">
        
        <div className="doctors_container">
          <Link to="/3">
            <button className="myButton " title={this.dentist}>
              Dentist
            </button>
          </Link>
          <Link to="/4">
            <button className="myButton"title={this.generalpractitioner}>
              general practitioner
              </button>
          </Link>
          <Link to="/5">
            <button className="myButton"title={this.Surgeon }>
              Surgeon
              </button>
          </Link>
          <Link to="/6">
            <button className="myButton"title={this.Dermatologist}>
              Dermatologist
              </button>
          </Link>
          <Link to="/7">
            <button className="myButton"title={this.Psychiatrist}>
              Psychiatrist
              </button>
          </Link>
          <Link to="/8">
            <button className="myButton"title={this.Urologist}>
              Urologist
              </button>
          </Link>
          <Link to="/9">
            <button className="myButton"title={this.Gynecologists}>
              Gynecologists
              </button>
          </Link>
          <Link to="/10">
            <button className="myButton"title={this.Radiologists}>
              Radiologists
              </button>
          </Link>
          <Link to="/11">
            <button className="myButton"title={this.Pathologists}>
              Pathologists
              </button>
          </Link>
          <Link to="/12">
            <button className="myButton"title={this.Ophthalmologist}>
              Ophthalmologist
              </button>
          </Link>
          <Link to="/13">
            <button className="myButton"title={this.Internists}>
              Internists
              </button>
          </Link>
          <Link to="/14">
            <button className="myButton"title={this.Allergist}>
              Allergist
              </button>
          </Link>
          <Link to="/15">
            <button className="myButton"title={this.Physician}>
              Physician
              </button>
          </Link>
          <Link to="/16">
            <button className="myButton"title={this.Pediatrician}>
              Pediatrician
              </button>
          </Link>
          <Link to="/17">
            <button className="myButton"title={this.Nephrologist}>
              Nephrologist
              </button>
          </Link>
          <Link to="/18">
            <button className="myButton"title={this.Anesthesiologist}>
              Anesthesiologist
              </button>
          </Link>
        </div>
        <footer>
        <section className= "social_container">
          <h3 className="Follow">Follow Us</h3>
        <a className= "social_icons" href="https://www.facebook.com/">
          <h4 class="fa fa-facebook"></h4>
          </a>
          <a className= "social_icons" href="https://www.instagram.com/?hl=en">
            <h4 class="fa fa-instagram"></h4>
            </a>
          <a className= "social_icons" href="https://twitter.com/?lang=en">
            <h4 class="fa fa-twitter"></h4>
          </a>
          </section>
      <a href="#"><h4> Copyright © 2019 </h4></a>
      <a href="#"><h4>Privacy Policy</h4></a>
      <a href="#"><h4>Contact us</h4></a>
      <a href="#"><h4> Amgad Behman & Associates</h4></a>
      <a href="#"><h4>Sitemap</h4></a>
      </footer>
      </div>
    )
  }
}

export default Pickdoctor
