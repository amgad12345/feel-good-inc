import React from 'react'
import Ophthalmologist from '../components/Ophthalmologist'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link, Redirect } from 'react-router-dom'

const Page12= () => {
  const [ophthalmologist, GetOphthalmologist] = useState([])

  const getGetOphthalmologistsFromApi = async () => {
    console.log('about to call api')

    const resp = await axios.get(
      'https://doc-new-api.herokuapp.com/api/Doctor/gettype/Ophthalmologist'
    )
    const response = resp.data
    GetOphthalmologist(resp.data)
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
    getGetOphthalmologistsFromApi()
  }, [])

  return (
    
 <>
 {isAuthenticated ? (
   <>
    <div>
      {ophthalmologist.map(Doc => {
        return <Ophthalmologist
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

export default Page12

