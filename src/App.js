import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './components/Home'
import DoctorProfile from './components/DoctorProfile'
import BookAppointment from './components/BookAppointment'
import Confirmation from './components/Confirmation'

import './App.css'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/doctor/:id" element={<DoctorProfile />} />
        <Route exact path="/book/:id" element={<BookAppointment />} />
        <Route exact path="/confirmation" element={<Confirmation />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
