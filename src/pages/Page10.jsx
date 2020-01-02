import React from 'react'
import Radiologists from '../components/Radiologists'
import { useState, useEffect } from 'react'
import axios from 'axios'
const Page10= () => {
  const [radiologists, GetRadiologists] = useState([])

  const getRadiologistsFromApi = async () => {
    console.log('about to call api')

    const resp = await axios.get(
      'https://localhost:5001/api/Doctor/getdent/Radiologist'
    )
    const response = resp.data
    GetRadiologists(resp.data)
    console.log('resp ' + JSON.stringify(resp))
    console.log(response)
  }

  useEffect(() => {
    getRadiologistsFromApi()
  }, [])

  return (
    <div>
      {radiologists.map(Doc => {
        return <Radiologists
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

export default Page10

