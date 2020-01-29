import React from 'react'
import Pediatrician from '../components/Pediatrician'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link, Redirect } from 'react-router-dom'


const Page15 = () => {
  const [pediatricians, GetPediatrician] = useState([])

  const getPediatriciansFromApi = async () => {
    console.log('about to call api')

    const resp = await axios.get(
      'https://doc-new-api.herokuapp.com/api/Doctor/gettype/Pediatrician'
    )
    const response = resp.data
    GetPediatrician(resp.data)
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
    getPediatriciansFromApi()
  }, [])

  return (
    
 <>
 {isAuthenticated ? (
   <>
    <div>
      {pediatricians.map(Doc => {
        return <Pediatrician 
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

