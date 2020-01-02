import React from 'react'
import Allergist from '../components/Allergist'
import { useState, useEffect } from 'react'
import axios from 'axios'

const Page14= () => {
  const [allergists, GetAllergist] = useState([])

  const getAllergistsFromApi = async () => {
    console.log('about to call api')

    const resp = await axios.get(
      'https://localhost:5001/api/Doctor/getdent/Allergist'
    )
    const response = resp.data
    GetAllergist(resp.data)
    console.log('resp ' + JSON.stringify(resp))
    console.log(response)
  }

  useEffect(() => {
    getAllergistsFromApi()
  }, [])

  return (
    <div>
      {allergists.map(Doc => {
        return <Allergist 
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

export default Page14

