import React, { useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import ListProfile from './components/profile/ListProfile'
import Login from './components/auth/Login'
import Register from './components/auth/Register'
import Header from './components/layout/Header'
import ProfileUser from './components/profile/ProfileUser'
import AddEducation from './components/Education/AddEducation'
import AddExperience from './components/Experience/AddExperience'
import Alert from './components/layout/Alert'
import CreateProfile from './components/profile/CreateProfile'
import { LoadUser } from './action/authAction'
import setAuthToken from './util/setAuthToken'

import store from './store'

if (localStorage.token) {
  setAuthToken(localStorage.token)
}
const App = () => {
  useEffect(() => {
    store.dispatch(LoadUser())
  }, [])

  return (
    <Router>
      <Header />
      <Alert />
      <div className="">
        <Routes>
          <Route excat path="/" element={<ListProfile />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          {/* private Route */}
          {/* userProfile  */}
          <Route path="/profile" element={<ProfileUser />} />
          {/* addeducation addExperience create profile*/}
          <Route path="/addEducation" element={<AddEducation />} />
          <Route path="/addExperience" element={<AddExperience />} />
          <Route path="/createProfile" element={<CreateProfile />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
