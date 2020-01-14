import React from 'react'
import Ophthalmologist from '../components/Ophthalmologist'
import { useState, useEffect } from 'react'
import axios from 'axios'

const Page12= () => {
  const [ophthalmologist, GetOphthalmologist] = useState([])

  const getGetOphthalmologistsFromApi = async () => {
    console.log('about to call api')

    const resp = await axios.get(
      'https://localhost:5001/api/Doctor/gettype/Ophthalmologist'
    )
    const response = resp.data
    GetOphthalmologist(resp.data)
    console.log('resp ' + JSON.stringify(resp))
    console.log(response)
  }

  useEffect(() => {
    getGetOphthalmologistsFromApi()
  }, [])

  return (
    <div>
      {ophthalmologist.map(Doc => {
        return <Ophthalmologist
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

export default Page12

