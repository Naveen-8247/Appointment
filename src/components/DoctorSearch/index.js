import './index.css'
import { FaSearch } from 'react-icons/fa'

const DoctorSearch = ({searchTerm, onChange}) => (
  <div className="search-wrapper">
    <FaSearch className="icon" />
    <input
      className="search-input"
      type="text"
      placeholder="Search by Name or Specialization"
      value={searchTerm}
      onChange={event => onChange(event.target.value)}
    />
  </div>
)

export default DoctorSearch
