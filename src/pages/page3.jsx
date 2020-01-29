import React from 'react'
import { Link, Redirect } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Dentists from '../components/Dentists'
const Page3 = () => {
  const [dentists, GetDentists] = useState([])

  const getDentistsFromApi = async () => {
    console.log('about to call api')

    const resp = await axios.get(
      'https://doc-new-api.herokuapp.com/api/Doctor/gettype/dentist'
      
       
    )
    const response = resp.data
    GetDentists(resp.data)
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
    getDentistsFromApi()
  }, [])
  console.log(dentists)
  return (
    <>
    {isAuthenticated ? (
      <>
    <div>
      {dentists.map(Den => {
        return <Dentists 
        id={Den.id} 
        name={Den.name}
        type={Den.type}
        phoneNumber={Den.phoneNumber} 
        email={Den.email} 
        adress={Den.adress} 
        review={Den.review}  
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

export default Page3
