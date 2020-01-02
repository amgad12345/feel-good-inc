import React from 'react'
import Gynecologists from '../components/Gynecologists'
import { useState, useEffect } from 'react'
import axios from 'axios'

const Page9= () => {
  const [gynecologists, GetGynecologists] = useState([])

  const getGynecologistsFromApi = async () => {
    console.log('about to call api')

    const resp = await axios.get(
      'https://localhost:5001/api/Doctor/getdent/Gynecologist'
    )
    const response = resp.data
    GetGynecologists(resp.data)
    console.log('resp ' + JSON.stringify(resp))
    console.log(response)
  }

  useEffect(() => {
    getGynecologistsFromApi()
  }, [])

  return (
    <div>
      {gynecologists.map(Doc => {
        return <Gynecologists 
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

export default Page9

