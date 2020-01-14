import React from 'react'
import Nephrologist from '../components/Nephrologist'
import { useState, useEffect } from 'react'
import axios from 'axios'

const Page17 = () => {
  const [nephrologists, GetNephrologist] = useState([])

  const getNephrologistsFromApi = async () => {
    console.log('about to call api')

    const resp = await axios.get(
      'https://localhost:5001/api/Doctor/gettype/Nephrologist'
    )
    const response = resp.data
    GetNephrologist(resp.data)
    console.log('resp ' + JSON.stringify(resp))
    console.log(response)
  }

  useEffect(() => {
    getNephrologistsFromApi()
  }, [])

  return (
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
  )
}

export default Page17


