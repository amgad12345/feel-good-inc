import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import StarRatings from 'react-star-ratings'
import { Link, Redirect } from 'react-router-dom'
import W from '../components/W'


const SingleDoctorPortal = props => {
  const [doctor, GetDoctor] = useState({})
  const [form, GetForm] = useState({})
  const [appointmentForms, setAppointmentForms] = useState([])
  const [appID, DeleteApp] = useState([])


  const getSingleDoctorAppointmentApi = async () => {
    console.log('doctor id ' + props.match.params.id)

    const resp = await axios.get(
      `https://doc-new-api.herokuapp.com/api/Doctor/getdoc-appointmen/${props.match.params.id}`
    )
    console.log(resp.data)
    GetDoctor(resp.data)
    setAppointmentForms(resp.data.appointmentForms)
    console.log(resp.data.appointmentForms)
  }

  const DeleteAppointment = async (id, showWelcomeMessage) => {
    console.log(id)
    const resp = await axios.delete(
      `https://doc-new-api.herokuapp.com/api/AppointmentForm/${id}`
    )


    DeleteApp(resp.data)
    console.log(resp)
   
  }

  const [isAuthenticated, setIsAuthenticated] = useState(true)
  useEffect(() => {
    const token = localStorage.getItem('token')
    if (!token) {
      setIsAuthenticated(false)
    }
  }, [])

  useEffect(() => {
    getSingleDoctorAppointmentApi()
  }, [])

  return (
    <>
      {isAuthenticated ? (
        <>
          <div className="SingleDoctorPortal_Container">
            <div className="doctors2">
              <section>
                <h1 className="doctors_name">{doctor.name}</h1>
                <h3 className="doctors_info" id ="info">Type: {doctor.type}</h3>
                <h3 id ="info">
                   Phone Number:{' '}
                  <a href={`tel:${doctor.phoneNumber}`}>
                    {' '}
                    {doctor.phoneNumber}
                  </a>
                </h3>
                <h3 id ="info">Email: {doctor.email}</h3>
                <h3 id ="info">Adress: {doctor.adress}</h3>
                <section className = "rate">
                <h3 className = "Review" id ="info">Review: {doctor.review}</h3>
                <StarRatings
           className = "Review"
          rating={doctor.review}
          starRatedColor="yellow"
          numberOfStars={5}
          name="tvtvShows"
          starDimension="15px"
          starSpacing="2px"
         />
          </section>
              </section>
            </div>
            <div className="doctors2">
              <section>
                {appointmentForms.map(form => {
                  return (
                    <>
                      <W
                        form={form}
                        DeleteApp={DeleteAppointment}
                      />
                    </>
                  )
                })}
              </section>
            </div>
          </div>
        </>
      ) : (
        <Redirect to="/Unauthed" />
      )}
    </>
  )
}

export default SingleDoctorPortal
