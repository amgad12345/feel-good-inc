import React from 'react'
import Anesthesiologist from '../components/Anesthesiologist'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link, Redirect } from 'react-router-dom'


const Page17 = () => {
  const [anesthesiologists, GetAnesthesiologist] = useState([])

  const getAnesthesiologistsFromApi = async () => {
    console.log('about to call api')

    const resp = await axios.get(
      'https://doc-new-api.herokuapp.com/api/Doctor/gettype/Anesthesiologist'
    )
    const response = resp.data
    GetAnesthesiologist(resp.data)
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
    getAnesthesiologistsFromApi()
  }, [])

  return (
<>
    {isAuthenticated ? (
      <>


    <div>
      {anesthesiologists.map(Doc => {
        return <Anesthesiologist
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


