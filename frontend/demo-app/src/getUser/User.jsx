import React from 'react'
import './user.css'
import api from '../api'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import toast from 'react-hot-toast'

const User = () => {
  const [users, setUsers] = useState([])

  useEffect(() => {
    debugger
    api.getUsers().then((response) => {
      const data = response.data
      setUsers(data)
    })
  }, [])

  const handleDelete = async (delItem) => {
    debugger
    console.log('Delete button clicked', delItem)
    try {
      await api.deleteUser(delItem)
      toast.success('user deleted Successfully', { position: 'top-right' })
      await api.getUsers().then((response) => {
        const data = response.data
        setUsers(data)
      })
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className="userTable">
      <Link to="/adduser" type="button" className="btn btn-primary">
        Add User <i className="fa-solid fa-user-plus"></i>
      </Link>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col">S.No.</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Address</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users?.map((item, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item?.name}</td>
                <td>{item?.email}</td>
                <td>{item?.address}</td>
                <td className="actionButtons">
                  <Link
                    to={`/updateUser/` + item?._id}
                    className="btn btn-info"
                  >
                    {' '}
                    <i className="fa-solid fa-pen-to-square"></i>
                  </Link>

                  <button
                    className="btn btn-danger"
                    onClick={() => handleDelete(item?._id)}
                  >
                    <i className="fa-solid fa-trash"></i>
                  </button>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default User
