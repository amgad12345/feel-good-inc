import React from 'react'
import Surgeon from '../components/Surgeon'
import axios from 'axios'
import { Link, Redirect } from 'react-router-dom'
import { useState, useEffect } from 'react'



const Page5= () => {
  const [surgeons, GetSurgeon] = useState([])

  const getSurgeonsFromApi = async () => {
    console.log('about to call api')

    const resp = await axios.get(
      'https://localhost:5001/api/Doctor/gettype/Surgeon'
    )
    const response = resp.data
    GetSurgeon(resp.data)
    console.log('resp ' + JSON.stringify(resp))
    console.log(response.name)
  }  

  const [isAuthenticated, setIsAuthenticated] = useState(true)
  useEffect(() => {
    const token = localStorage.getItem('token')
    if (!token) {
      setIsAuthenticated(false)
    }
  }, [])


  useEffect(() => {
    getSurgeonsFromApi()
  }, [])

  return (
<>
    {isAuthenticated ? (
      <>

    <div>
      {surgeons.map(ser => {
        return <Surgeon 
        id={ser.id} 
        name={ser.name}
        type={ser.type}
        phoneNumber={ser.phoneNumber} 
        email={ser.email} 
        adress={ser.adress} 
        review={ser.review}  
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

export default Page5



