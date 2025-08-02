import Header from '../Header'
import './index.css'
import { FaCheckCircle } from 'react-icons/fa'

const Confirmation = () => (
  <div>
    <Header />
    <div className="confirmation-container">
      <FaCheckCircle size={60} color="green" />
      <h2>Appointment Confirmed!</h2>
      <p>You will receive a confirmation email shortly.</p>
    </div>
  </div>
)

export default Confirmation
