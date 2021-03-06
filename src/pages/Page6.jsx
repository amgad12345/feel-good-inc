import React from 'react'
import Dermatologist from '../components/Dermatologist'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link, Redirect } from 'react-router-dom'


const Page5= () => {
  const [dermatologists, GetDermatologist] = useState([])

  const getDermatologistsFromApi = async () => {
    console.log('about to call api')

    const resp = await axios.get(
      'https://doc-new-api.herokuapp.com/api/Doctor/gettype/Dermatologist'
    )
    const response = resp.data
    GetDermatologist(resp.data)
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
    getDermatologistsFromApi()
  }, [])

  return (
    <>
    {isAuthenticated ? (
      <>
    <div>
      {dermatologists.map(Doc => {
        return <Dermatologist 
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

export default Page5

