import React from 'react'

import { useState, useEffect } from 'react'
import axios from 'axios'
import Dentists from '../components/Dentists'
const Page3 = () => {
  const [dentists, GetDentists] = useState([])

  const getDentistsFromApi = async () => {
    console.log('about to call api')

    const resp = await axios.get(
      'https://localhost:5001/api/Doctor/gettype/dentist'
      
       
    )
    const response = resp.data
    GetDentists(resp.data)
    console.log('resp ' + JSON.stringify(resp))
    console.log(response)
  }

  useEffect(() => {
    getDentistsFromApi()
  }, [])

  return (
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
  )
}

export default Page3
