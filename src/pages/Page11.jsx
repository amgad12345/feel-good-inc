import React from 'react'
import Pathologists from '../components/Pathologists'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link, Redirect } from 'react-router-dom'

const Page11= () => {
  const [pathologists, GetPathologists] = useState([])

  const getPathologistsFromApi = async () => {
    console.log('about to call api')

    const resp = await axios.get(
      'https://localhost:5001/api/Doctor/gettype/Pathologist%20'
    )
    const response = resp.data
    GetPathologists(resp.data)
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
    getPathologistsFromApi()
  }, [])

  return (
    
 <>
 {isAuthenticated ? (
   <>

    <div>
      {pathologists.map(Doc => {
        return <Pathologists
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

export default Page11

