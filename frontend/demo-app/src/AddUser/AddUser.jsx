import React from 'react'
import { Link, useNavigate } from 'react-router'
import { useState } from 'react'
import api from '../api'
// import { Navigation } from 'react-router'
import './adduser.css'
import toast from 'react-hot-toast'

const AddUser = () => {
  const userDetails = {
    name: '',
    email: '',
    address: '',
  }

  const [userData, setUserData] = useState(userDetails)
  const navigate = useNavigate()

  const inputHandler = (e) => {
    debugger
    const { name, value } = e.target
    console.log(name, value)
    setUserData({ ...userData, [name]: value })
  }

  const submitForm = async (e) => {
    debugger
    e.preventDefault()
    try {
      const response = await api.postUser(userData)
      toast.success(response.data.message, { position: 'top-right' })
      navigate('/')
    } catch {
      console.log('api error occured')
    }
  }

  return (
    <div className="addUser">
      <Link to="/" className="btn btn-secondary">
        {' '}
        <i className="fa-solid fa-backward"></i>Back
      </Link>
      <h3>Add New User</h3>
      <form className="addUserForm" onSubmit={submitForm}>
        <div className="inputGroup">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            autoComplete="off"
            placeholder="Enter your Name"
            onChange={inputHandler}
          ></input>
        </div>
        <div className="inputGroup">
          <label htmlFor="email">E-mail:</label>
          <input
            type="email"
            id="email"
            name="email"
            autoComplete="off"
            placeholder="Enter your email"
            onChange={inputHandler}
          ></input>
        </div>
        <div className="inputGroup">
          <label htmlFor="address">Address:</label>
          <input
            type="text"
            id="address"
            name="address"
            autoComplete="off"
            placeholder="Enter your address"
            onChange={inputHandler}
          ></input>
        </div>
        <div className="inputGroup">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  )
}

export default AddUser
