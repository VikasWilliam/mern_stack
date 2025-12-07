import React from 'react'
import { Link, useNavigate } from 'react-router'
import { useState, useEffect } from 'react'
import api from '../api'
import toast from 'react-hot-toast'
import { useParams } from 'react-router-dom'

const UpdateUser = () => {
  const userDetails = {
    name: '',
    email: '',
    address: '',
  }
  const navigate = useNavigate()
  const { id } = useParams()
  const [user, setUser] = useState()
  console.log('id=>', id)
  const [updatedData, setUpdateData] = useState()

  useEffect(() => {
    api.getUniqueUser(id).then((res) => {
      const data = res.data
      setUser(data)
    })
    console.log(user)
  }, [])

  const inputHandler = (e) => {
    debugger
    const { name, value } = e.target
    console.log(name, value)
    setUser({ ...user, [name]: value })
  }

  const submitForm = async (e) => {
    debugger
    e.preventDefault()
    try {
      const response = await api.updateUser(id, user)
      toast.success('user updated successfully', { position: 'top-right' })
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
      <h3>Update user details</h3>
      <form className="addUserForm" onSubmit={submitForm}>
        <div className="inputGroup">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            autoComplete="off"
            placeholder="Enter your Name"
            value={user?.name}
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
            value={user?.email}
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
            value={user?.address}
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

export default UpdateUser

// import React from 'react'
// import { useState, useEffect } from 'react'
// import api from '../api'
// import { useParams } from 'react-router-dom'

// const UpdateUser = () => {
//   const { id } = useParams()
//   const [user, setUser] = useState()
//   console.log('id=>', id)

//   useEffect(() => {
//     api.getUniqueUser(id).then((res) => {
//       const data = res.data
//       setUser(data)
//     })
//     console.log(user)
//   }, [])

//   console.log('user==>', user)

//   return <div>updateUser</div>
// }

// export default UpdateUser
