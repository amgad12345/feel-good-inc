import React from 'react'
import GeneralPractitioner from '../components/GeneralPractitioner'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link, Redirect } from 'react-router-dom'


const Page4= () => {
  const [generalpractitioner, GetGeneralPractitioner] = useState([])

  const getGeneralPractitionerFromApi = async () => {
    console.log('about to call api')

    const resp = await axios.get(
      'https://doc-new-api.herokuapp.com/api/Doctor/gettype/General%20Practitioner'
    )
    const response = resp.data
    GetGeneralPractitioner(resp.data)
    console.log('resp ' + JSON.stringify(resp))
    console.log(response)
  } 

  const [isAuthenticated, setIsAuthenticated] = useState(true)
  useEffect(() => {
    const token = localStorage.getItem('token')
    if (!token) {
      setIsAuthenticated(false)
    }
  }, [])


  useEffect(() => {
    getGeneralPractitionerFromApi()
  }, [])

  return (
    <>
    {isAuthenticated ? (
      <>

    <div>
      {generalpractitioner.map(Gen => {
        return <GeneralPractitioner
        id={Gen.id} 
        name={Gen.name}
        type={Gen.type}
        phoneNumber={Gen.phoneNumber} 
        email={Gen.email} 
        adress={Gen.adress} 
        review={Gen.review}  
        />
      })}
    </div>

    </>
      ) : (
        <Redirect to="/Unauthed" />
      )}
    </>
  )

}

export default Page4

