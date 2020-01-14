import React from 'react'
import Pediatrician from '../components/Pediatrician'
import { useState, useEffect } from 'react'
import axios from 'axios'

const Page15 = () => {
  const [pediatricians, GetPediatrician] = useState([])

  const getPediatriciansFromApi = async () => {
    console.log('about to call api')

    const resp = await axios.get(
      'https://localhost:5001/api/Doctor/gettype/Pediatrician'
    )
    const response = resp.data
    GetPediatrician(resp.data)
    console.log('resp ' + JSON.stringify(resp))
    console.log(response)
  }

  useEffect(() => {
    getPediatriciansFromApi()
  }, [])

  return (
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
  )
}

export default Page15

