import React, { Component } from 'react'
import axios from 'axios'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarCheck } from '@fortawesome/free-solid-svg-icons'
import StarRatings from 'react-star-ratings'


const Ophthalmologist = props => {
  return (
    <>
        <div className = "doctors_conainer">
         <div  className = "doctors">
         <h2 className = "doctors_name"> {props.name}</h2>
         <h3>Type: {props.type}</h3>
         <h3>Phone: {props.phoneNumber}</h3>
         <h3>Email: {props.email}</h3>
         <h3>Address: {props.adress}</h3>
         <section className = "rate">
         <h3 className = "Review">Review: {props.review}</h3>
         <StarRatings
           className = "Review"
          rating={props.review}
          starRatedColor="yellow"
          numberOfStars={5}
          name="tvtvShows"
          starDimension="15px"
          starSpacing="2px"
         />
         </section>
         <Link className = "Make_Appointment" to={`/SingleDoctor/${props.id}`}>Make Appointment 
         <FontAwesomeIcon className="faCalendarCheck" icon={faCalendarCheck} />
         </Link>
         </div>
         </div>
    </>
  )
}

export default Ophthalmologist