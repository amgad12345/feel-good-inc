import React from 'react'
import Moment from 'react-moment'
import { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
const W = props => {
  const [showWelcomeMessage, setShowWelcomeMessage] = useState(false)
  useEffect(() => {
    if (showWelcomeMessage) {
      props.DeleteApp(props.form.id, showWelcomeMessage)
    }
  }, [showWelcomeMessage])

  const showWelcomeMessageFunc = () => {
    if (!showWelcomeMessage) {
      setShowWelcomeMessage(true)
    } else {
      setShowWelcomeMessage(false)
    }
  }
  return (
    <section className= "Appointment_Results">
      <h1>
        <Moment format={' MMM Do YYYY  h:mm a'}>
          {props.form.appointmentDate}
        </Moment>
      </h1>
      {showWelcomeMessage && (
        <div>
        <h1 className = "Cancelled_Appointment"> This appointment has been cancelled</h1>
        <h1 className = "Cancelled_Appointment">Patient was informed by email</h1>
       <h3 id = "info"> Call Patient:{' '}
       <a href={`tel:${props.form.phoneNumber}`}> 
       {props.form.phoneNumber}</a>
       </h3>
        <h3 id = "info"> Email Patient: {props.form.email}</h3>
        </div>
      )}
      <h3 id = "info">
        Patient Name: {props.form.firstNanme}
         {""} {props.form.lastNanme}
      </h3>
      <h1 className = "Visit">Reason For Visit</h1>
      <h3 id = "Dis"> {props.form.discription}</h3>
      <sectio className = "Button_Container">
      
      <button
        id = "button"
        href="#something"
        className="cancel_but"
        onClick={showWelcomeMessageFunc}
        type="button"
      >
        Cancel Appointment
      </button>
      
      </sectio>
      <br></br>

      <hr class="style13"></hr>
    </section>
  )
}

export default W
