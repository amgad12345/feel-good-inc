import React from 'react'
import Psychiatrist from '../components/Psychiatrist'
import { useState, useEffect } from 'react'
import axios from 'axios'
const Page7= () => {
  const [psychiatrists, GetPsychiatrist] = useState([])

  const getPsychiatristsFromApi = async () => {
    console.log('about to call api')

    const resp = await axios.get(
      'https://localhost:5001/api/Doctor/gettype/Psychiatristst'
    )
    const response = resp.data
    GetPsychiatrist(resp.data)
    console.log('resp ' + JSON.stringify(resp))
    console.log(response)
  }

  useEffect(() => {
    getPsychiatristsFromApi()
  }, [])

  return (
    <div>
    {psychiatrists.map(Doc => {
      return <Psychiatrist 
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

export default Page7

