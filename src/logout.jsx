import React from 'react'
import {Link} from 'react-router-dom'
const  Logout=()=> {
    localStorage.removeItem('token')
  return (
    <div className='logoutPage'>
      <h1>You are successfully Logged out!!</h1>

      <button type="button" class="btn btn-info"> 
      <Link to={'/'}>Login Again</Link>
      </button>
    </div>
  )
}

export default Logout
