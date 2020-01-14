import React from 'react'
import Anesthesiologist from '../components/Anesthesiologist'
import { useState, useEffect } from 'react'
import axios from 'axios'
const Page17 = () => {
  const [anesthesiologists, GetAnesthesiologist] = useState([])

  const getAnesthesiologistsFromApi = async () => {
    console.log('about to call api')

    const resp = await axios.get(
      'https://localhost:5001/api/Doctor/gettype/Anesthesiologist'
    )
    const response = resp.data
    GetAnesthesiologist(resp.data)
    console.log('resp ' + JSON.stringify(resp))
    console.log(response)
  }

  useEffect(() => {
    getAnesthesiologistsFromApi()
  }, [])

  return (
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
  )
}

export default Page17


