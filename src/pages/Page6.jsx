import React from 'react'
import Dermatologist from '../components/Dermatologist'
import { useState, useEffect } from 'react'
import axios from 'axios'
const Page5= () => {
  const [dermatologists, GetDermatologist] = useState([])

  const getDermatologistsFromApi = async () => {
    console.log('about to call api')

    const resp = await axios.get(
      'https://localhost:5001/api/Doctor/getdent/Surgeon'
    )
    const response = resp.data
    GetDermatologist(resp.data)
    console.log('resp ' + JSON.stringify(resp))
    console.log(response)
  }

  useEffect(() => {
    getDermatologistsFromApi()
  }, [])

  return (
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
  )
}

export default Page5

