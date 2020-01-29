import React from 'react'
import Physician from '../components/Physician'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link, Redirect } from 'react-router-dom'

const Page15 = () => {
  const [physicians, GetPhysician] = useState([])

  const getPhysiciansFromApi = async () => {
    console.log('about to call api')

    const resp = await axios.get(
      'https://localhost:5001/api/Doctor/gettype/Physician'
    )
    const response = resp.data
    GetPhysician(resp.data)
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
    getPhysiciansFromApi()
  }, [])

  return (
    
 <>
 {isAuthenticated ? (
   <>
    <div>
      {physicians.map(Doc => {
        return <Physician 
        id={Doc.id} 
        name={Doc.name}
        type={Doc.type}
        phoneNumber={Doc.phoneNumber} 
        email={Doc.email} 
        adress={Doc.adress} 
        review={Doc.review}  
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

export default Page15


