import React from 'react'
import Internists from '../components/Internists'
import { useState, useEffect } from 'react'
import axios from 'axios'

const Page13= () => {
  const [internists, GetInternists] = useState([])

  const getInternistsFromApi = async () => {
    console.log('about to call api')

    const resp = await axios.get(
      'https://localhost:5001/api/Doctor/gettype/Internist'
    )
    const response = resp.data
    GetInternists(resp.data)
    console.log('resp ' + JSON.stringify(resp))
    console.log(response)
  }

  useEffect(() => {
    getInternistsFromApi()
  }, [])

  return (
    <div>
      {internists.map(Doc => {
        return <Internists
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

export default Page13


