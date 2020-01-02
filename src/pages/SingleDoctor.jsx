import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'

const SingleDoctor = props => {
  const [doctor, GetDoctor] = useState([])
  const [appDate, SetAppDate] = useState('')
  const [discrip, SetDiscrip] = useState('')
  const [emaill, SetEmail] = useState('')
  const [lastN, SetlastName] = useState('')

  const getSingleDoctorApi = async () => {
    console.log('doctor id ' + props.match.params.id)
    const resp = await axios.get(
      `https://localhost:5001/api/Doctor/${props.match.params.id}`
    )

    GetDoctor(resp.data)
  }

  const sendAppointmenFormToApi = async () => {
    const resp = await axios.post(
      'https://localhost:5001/api/AppointmentForm',
      {
        AppointmentDate: appDate,
        Discription: discrip,
        Email: emaill,
        LastNanme: lastN,
        DoctorId: parseInt(props.match.params.id),
      }
    )

    console.log(resp.data)
    GetDoctor(prev => {
      return {
        ...prev,
        appointmentForms: [...prev.appointmentForms.concat(resp.data)],
      }
    })
  }

  useEffect(() => {
    getSingleDoctorApi()
  }, [])

  return (
    <div  className = "doctors2">
      
      
        <h1 className = "doctors_name">{doctor.name}</h1>
        <h4 className = "doctors_info">doctor type: {doctor.type}</h4>
        <h4>doctor phoneNumber: {doctor.phoneNumber}</h4>
        <h4>doctor email: {doctor.email}</h4>
        <h4>doctor adress: {doctor.adress}</h4>
        <h4>doctor review: {doctor.review}</h4>
        
      <section>
        <h1>Make Appointment</h1>
       
        <input
          className="inp"
          type="text"
          className="patient_info"
          placeholder="First Name"
          value={emaill}
          onChange={e => SetEmail(e.target.value)}
        />
        
        <input
          className="inp"
          type="text"
          className="patient_info"
          placeholder="Last Name"
          value={lastN}
          onChange={e => SetlastName(e.target.value)}
        />
        <input
          className="inp"
          type="text"
          className="patient_info"
          placeholder="Date"
          value={appDate}
          onChange={e => SetAppDate(e.target.value)}
        />
        <h1>Reason For Visit{' '}</h1>
        <textarea 
          cols="40" 
          rows="5"
          className="reason"
          type="text"
          value={discrip}
          onChange={e => SetDiscrip(e.target.value)}
        />
        <section>
        {doctor.appointmentForms &&
          (doctor.appointmentForms.length > 0 ? (
            <ul>
              {doctor.appointmentForms.map(appointment => {
                return <p>
                  your appointment has been set see you on
                  <br></br> 
                 <h4>{appDate}</h4> 
                </p>
                        
              })}
            </ul>
          ) : (
            ""
          ))}
      </section>
        <button className= "submit_appointment" onClick={sendAppointmenFormToApi}>
          submit appointment Request
        </button>
      </section>
    </div>
    
  )
}

export default SingleDoctor
