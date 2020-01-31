import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBan } from '@fortawesome/free-solid-svg-icons'
import React from 'react'

const Unauthed = () => {
  return (
  <>
<div class="cont_error">
<FontAwesomeIcon className="faUserPlus" icon={faBan} /> 
  <h6>WE ARE SORRY, BUT THE PAGE YOU REQUESTED IS FOR AUTHERIZED USER PLEASE SIGN UP !</h6>
  </div>
</>
  )
}

export default Unauthed