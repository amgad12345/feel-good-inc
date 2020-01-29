import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Moment from 'react-moment'
import StarRatings from 'react-star-ratings'
import { Link, Redirect } from 'react-router-dom'

const SingleDoctor = props => {
  const [doctor, GetDoctor] = useState([])
  const [appDate, SetAppDate] = useState('')
  const [discrip, SetDiscrip] = useState('')
  const [emaill, SetEmail] = useState('')
  const [FirstN, SetFirstName] = useState('')
  const [Phone, SetPhone] = useState(0)
  const [lastN, SetlastName] = useState('')
  const [app, GetApp] = useState([])

  let cdate = new Date(appDate).toString('')

  const [showAppMessage, setAppMessage] = useState(false)

  const showAppMessageFunc = () => {
    if (!showAppMessage) {
      setAppMessage(true)
    } else {
      setAppMessage(false)
    }
  }

  const GetAllApp = async appointmentForms => {
    console.log('doctor id ' + props.match.params.id)
    const resp = await axios.get(
      `https://localhost:5001/api/Doctor/getdoc-appointmen/${props.match.params.id}`
    )
    console.log(resp.data)

    // GetApp(resp.data)

    console.log(resp.data)
    let result = checkapp(resp.data.appointmentForms)
    console.log('result is ' + result)
    return result
  }

  const checkapp = appointmentForms => {
    var d1 = new Date(appDate)
    let taken = false
    appointmentForms.map(element => {
      var d2 = new Date(element.appointmentDate)
      console.log(d1.getTime() + ' and ' + d2.getTime())
      //console.log(appointmentForms[7])
      //   console.log(Object.values(appointmentForms[1]))
      if (
        //element.appointmentDate.getTime() == appDate.getTime()
        // &&  element.appointmentDate >= appDate
        d1.getTime() === d2.getTime()
      ) {
        console.log('this date unavailable')
        setAppMessage(true)
        taken = true
      }
      //console.log('checking', { appDate, element: element.appointmentDate })
    })

    return taken
  }
  // .addHours(1)
  const getSingleDoctorApi = async () => {
    console.log('doctor id ' + props.match.params.id)
    const resp = await axios.get(
      `https://localhost:5001/api/Doctor/${props.match.params.id}`
    )
    console.log(resp.data)
    GetDoctor(resp.data)
  }

  const sendAppointmenFormToApi = async () => {
    const appointmentTaken = await GetAllApp()
    console.log(' okay ' + appointmentTaken)
    if (!appointmentTaken) {
      const resp = await axios.post(
        'https://localhost:5001/api/AppointmentForm',
        {
          Discription: discrip,
          Email: emaill,
          PhoneNumber: parseInt(Phone),
          FirstNanme: FirstN,
          LastNanme: lastN,
          AppointmentDate: appDate,
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
    } else {
      console.log("can't do")
    }
  }

  const [isAuthenticated, setIsAuthenticated] = useState(true)
  useEffect(() => {
    const token = localStorage.getItem('token')
    if (!token) {
      setIsAuthenticated(false)
    }
  }, [])

  useEffect(() => {
    GetAllApp()
  }, [])

  useEffect(() => {
    getSingleDoctorApi()
  }, [])
  //cdate = (new Date(appDate)).toString();
  return (
    <>
      {isAuthenticated ? (
        <>
          <div className="doctors2">
            <h1 className="doctors_name_form">{doctor.name}</h1>
            <h4 className="doctors_info_form">Type: {doctor.type}</h4>
            <h4 className="doctors_info_form">
              Phone Number:{' '}
              <a href={`tel:${doctor.phoneNumber}`}> {doctor.phoneNumber}</a>
            </h4>
            <h4 className="doctors_info_form">Email: {doctor.email}</h4>
            <h4 className="doctors_info_form">Adress: {doctor.adress}</h4>
            <section className="Rate_Container">
              <section className="rate">
                <h3 className="Review" id="Rev">
                  Review: {doctor.review}
                </h3>
                <StarRatings
                  className="Review"
                  rating={doctor.review}
                  starRatedColor="yellow"
                  numberOfStars={5}
                  name="tvtvShows"
                  starDimension="15px"
                  starSpacing="2px"
                />
              </section>
            </section>
            <section>
              <h1 className="Make">Make Appointment</h1>

              <input
                className="inp"
                type="text"
                className="patient_info"
                placeholder="EMAIL"
                value={emaill}
                onChange={e => SetEmail(e.target.value)}
              />
              <input
                className="inp"
                type="text"
                className="patient_info"
                placeholder="Phone Number "
                value={Phone}
                onChange={e => SetPhone(e.target.value)}
              />
              <input
                className="inp"
                type="text"
                className="patient_info"
                placeholder="First Name"
                value={FirstN}
                onChange={e => SetFirstName(e.target.value)}
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
                type="datetime-local"
                className="patient_info"
                placeholder="Date"
                value={appDate}
                onChange={e => {
                  console.log(e.target.value)

                  SetAppDate(e.target.value)
                }}
              />
              <h1 className="Reason">Reason For Visit </h1>
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
                        return (
                          <p>
                            {FirstN} your appointment has been set see you on
                            <br></br>
                            <br></br>
                            <Moment format={' MMM Do YYYY  h:mm a'}>
                              {appDate}
                            </Moment>
                          </p>
                        )
                      })}
                    </ul>
                  ) : (
                    ''
                  ))}
              </section>
              {showAppMessage && (
                <div>
                  <h1 className="Reason">date unavailable</h1>
                </div>
              )}
              <button
              id = "button"
                className="submit_appointment"
                onClick={sendAppointmenFormToApi}
              >
                submit appointment Request
              </button>
            </section>
          </div>
        </>
      ) : (
        <Redirect to="/Unauthed" />
      )}
    </>
  )
}

export default SingleDoctor
