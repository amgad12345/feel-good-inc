import React from 'react'
import Urologist from '../components/Urologist'
import { useState, useEffect } from 'react'
import { Link, Redirect } from 'react-router-dom'
import axios from 'axios'
const Page8= () => {
  const [urologists, GetUrologist] = useState([])

  const getUrologistsFromApi = async () => {
    console.log('about to call api')

    const resp = await axios.get(
      'https://doc-new-api.herokuapp.com/api/Doctor/gettype/Urologist'
    )
    const response = resp.data
    GetUrologist(resp.data)
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
    getUrologistsFromApi()
  }, [])

  return (
    <>
 {isAuthenticated ? (
   <>
    <div>
      {urologists.map(Doc => {
        return <Urologist 
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

export default Page8


