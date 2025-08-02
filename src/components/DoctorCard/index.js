import { Link } from 'react-router-dom'
import { FaStethoscope } from 'react-icons/fa'
import './index.css'

const statusList = {
  'Available Today': 'availabletoday',
  'Fully Booked': 'fullybooked',
  'On Leave': 'onleave',
}

const DoctorCard = ({ doctor }) => {
  const statusClass = statusList[doctor.status] || ''

  return (
    <div className="doctor-card">
      <img src={doctor.image} alt={doctor.name} />
      <h3>{doctor.name}</h3>
      <p><FaStethoscope /> {doctor.specialization}</p>
      <p className={`status ${statusClass}`}>{doctor.status}</p>
      <Link to={`/doctor/${doctor.id}`}>
        <button>View Profile</button>
      </Link>
    </div>
  )
}

export default DoctorCard

