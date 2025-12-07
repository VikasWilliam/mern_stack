import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import User from './getUser/USer'
import AddUser from './AddUser/AddUser'
import UpdateUser from './UpdateUser/UpdateUser'

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<User />} />
        <Route path="/adduser" element={<AddUser />} />
        <Route path="/updateUser/:id" element={<UpdateUser />} />
      </Routes>
    </Router>
  )
}

export default AppRouter
