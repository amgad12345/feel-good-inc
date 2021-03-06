import React from 'react'
import Gynecologists from '../components/Gynecologists'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link, Redirect } from 'react-router-dom'

const Page9= () => {
  const [gynecologists, GetGynecologists] = useState([])

  const getGynecologistsFromApi = async () => {
    console.log('about to call api')

    const resp = await axios.get(
      'https://doc-new-api.herokuapp.com/api/Doctor/gettype/Gynecologist'
    )
    const response = resp.data
    GetGynecologists(resp.data)
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
    getGynecologistsFromApi()
  }, [])

  return (
    <>
    {isAuthenticated ? (
      <>

    <div>
      {gynecologists.map(Doc => {
        return <Gynecologists 
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

export default Page9

