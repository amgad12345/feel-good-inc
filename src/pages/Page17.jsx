import React from 'react'
import Nephrologist from '../components/Nephrologist'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link, Redirect } from 'react-router-dom'

const Page17 = () => {
  const [nephrologists, GetNephrologist] = useState([])

  const getNephrologistsFromApi = async () => {
    console.log('about to call api')

    const resp = await axios.get(
      'https://doc-new-api.herokuapp.com/api/Doctor/gettype/Nephrologist'
    )
    const response = resp.data
    GetNephrologist(resp.data)
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
    getNephrologistsFromApi()
  }, [])

  return (
    <>
    {isAuthenticated ? (
      <>

    <div>
      {nephrologists.map(Doc => {
        return <Nephrologist 
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

export default Page17


