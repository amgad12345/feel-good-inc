import React from 'react'
import Pathologists from '../components/Pathologists'
import { useState, useEffect } from 'react'
import axios from 'axios'
const Page11= () => {
  const [pathologists, GetPathologists] = useState([])

  const getPathologistsFromApi = async () => {
    console.log('about to call api')

    const resp = await axios.get(
      'https://localhost:5001/api/Doctor/getdent/Pathologist%20'
    )
    const response = resp.data
    GetPathologists(resp.data)
    console.log('resp ' + JSON.stringify(resp))
    console.log(response)
  }

  useEffect(() => {
    getPathologistsFromApi()
  }, [])

  return (
    <div>
      {pathologists.map(Doc => {
        return <Pathologists
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

export default Page11

