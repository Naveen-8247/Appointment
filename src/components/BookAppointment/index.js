import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import Header from '../Header'
import './index.css'

const BookAppointment = () => {
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    datetime: '',
  })

  const handleInputChange = event => {
    const { name, value } = event.target
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }))
  }

  const handleFormSubmit = event => {
    event.preventDefault()

    const { name, email, datetime } = formData

    if (name === '' || email === '' || datetime === '') {
      alert('All fields are required.')
      return
    }

    navigate('/confirmation')
  }

  return (
    <div>
      <Header />
      <div className="form-container">
        <h2>Book Appointment</h2>
        <form onSubmit={handleFormSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Patient Name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
          <input
            type="datetime-local"
            name="datetime"
            value={formData.datetime}
            onChange={handleInputChange}
            required
          />
          <button type="submit">Confirm Booking</button>
        </form>
      </div>
    </div>
  )
}

export default BookAppointment
