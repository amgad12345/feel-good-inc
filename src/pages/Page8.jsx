import React from 'react'
import Urologist from '../components/Urologist'
import { useState, useEffect } from 'react'
import axios from 'axios'
const Page8= () => {
  const [urologists, GetUrologist] = useState([])

  const getUrologistsFromApi = async () => {
    console.log('about to call api')

    const resp = await axios.get(
      'https://localhost:5001/api/Doctor/gettype/Urologist'
    )
    const response = resp.data
    GetUrologist(resp.data)
    console.log('resp ' + JSON.stringify(resp))
    console.log(response)
  }

  useEffect(() => {
    getUrologistsFromApi()
  }, [])

  return (
    <div>
      {urologists.map(Doc => {
        return <Urologist 
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

export default Page8


