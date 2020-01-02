import React, { Component } from 'react'
import axios from 'axios'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarCheck } from '@fortawesome/free-solid-svg-icons'

const Allergist = props => {
  return (
    <>
    <div className = "doctors_conainer">
    <div  className = "doctors">
    <h2 className = "doctors_name"> {props.name}</h2>
    <h3>Type: {props.type}</h3>
    <h3>Phone: {props.phoneNumber}</h3>
    <h3>Email: {props.email}</h3>
    <h3>Address: {props.adress}</h3>
    <h3>Review: {props.review}</h3>
    <Link className = "Make_Appointment" to={`/SingleDoctor/${props.id}`}>Make Appointment 
    <FontAwesomeIcon className="faCalendarCheck" icon={faCalendarCheck} />
    </Link>
    </div>
    </div>
    </>
  )
}


export default Allergist