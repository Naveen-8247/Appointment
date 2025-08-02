import { useParams, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { FaStar } from 'react-icons/fa'
import { ClipLoader } from 'react-spinners'
import Header from '../Header'
import './index.css'

const statusClassMap = {
  'Available Today': 'availabletoday',
  'Fully Booked': 'fullybooked',
  'On Leave': 'onleave',
}

const DoctorProfile = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [doctorDetails, setDoctorDetails] = useState(null)

  useEffect(() => {
    const getDoctor = async () => {
      const response = await fetch('/doctors.json')
      const data = await response.json()
      const matchedDoctor = data.find(each => each.id === id)
      setDoctorDetails(matchedDoctor)
    }

    getDoctor()
  }, [id])

  if (doctorDetails === null) {
    return (
      <div className="loader-container">
        <ClipLoader color="#007bff" size={60} />
      </div>
    )
  }

  const handleBooking = () => {
    navigate(`/book/${doctorDetails.id}`)
  }

  const statusClass = statusClassMap[doctorDetails.status] || ''

  return (
    <div>
      <Header />
      <div className="profile-container">
        <div className="profile-left">
          <img
            src={doctorDetails.image}
            alt={doctorDetails.name}
            className="profile-image"
          />
          <h2>{doctorDetails.name}</h2>
          <p className="specialization">{doctorDetails.specialization}</p>
          <p className={`status ${statusClass}`}>
            <span className="status-heading">Status :</span> {doctorDetails.status}
          </p>
          <p className="description">{doctorDetails.description}</p>
        </div>

        <div className="profile-right">
          <div className="doctor-meta">
            <p className="rating">
              <FaStar className="star-icon" /> <strong>{doctorDetails.ratings}</strong> ({doctorDetails.reviewsCount} reviews)
            </p>
            <div className="tags">
              {doctorDetails.tags?.map((tag, index) => (
                <span key={index} className="tag">{tag}</span>
              ))}
            </div>
          </div>

          <div className="schedule-section">
            <h4>Today's Schedule:</h4>
            {doctorDetails.schedule?.length > 0 ? (
              <ul>
                {doctorDetails.schedule.map((slot, index) => (
                  <li key={index}>{slot}</li>
                ))}
              </ul>
            ) : (
              <p>No availability today.</p>
            )}
          </div>

          <div className="weekly-schedule">
            <h4>Weekly Availability:</h4>
            {doctorDetails.weeklySchedule?.length > 0 ? (
              <ul>
                {doctorDetails.weeklySchedule.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            ) : (
              <p>No weekly schedule available.</p>
            )}
          </div>

          <button className="book-btn" onClick={handleBooking}>
            Book Appointment
          </button>
        </div>
      </div>
    </div>
  )
}

export default DoctorProfile
