import React from 'react'
import Internists from '../components/Internists'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link, Redirect } from 'react-router-dom'

const Page13= () => {
  const [internists, GetInternists] = useState([])

  const getInternistsFromApi = async () => {
    console.log('about to call api')

    const resp = await axios.get(
      'https://doc-new-api.herokuapp.com/api/Doctor/gettype/Internist'
    )
    const response = resp.data
    GetInternists(resp.data)
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
    getInternistsFromApi()
  }, [])

  return (
    
 <>
 {isAuthenticated ? (
   <>
    <div>
      {internists.map(Doc => {
        return <Internists
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

export default Page13


