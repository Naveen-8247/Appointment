import { useEffect, useState } from 'react'
import Header from '../Header'
import DoctorCard from '../DoctorCard'
import DoctorSearch from '../DoctorSearch'
import { ClipLoader } from 'react-spinners'
import './index.css'

const Home = () => {
  const [doctorsList, setDoctorsList] = useState([])
  const [searchValue, setSearchValue] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchDoctors = async () => {
      const response = await fetch('/doctors.json')
      const data = await response.json()
      setDoctorsList(data)
      setLoading(false)
    }

    fetchDoctors()
  }, [])

  const filteredDoctors = doctorsList.filter(eachDoctor =>
    eachDoctor.name.toLowerCase().includes(searchValue.toLowerCase()) ||
    eachDoctor.specialization.toLowerCase().includes(searchValue.toLowerCase())
  )

  return (
    <div>
      <Header />
      <div className="home-container">
        <DoctorSearch searchTerm={searchValue} onChange={setSearchValue} />
        {loading ? (
          <div className="loader-container">
            <ClipLoader color="blue" size={40} />
          </div>
        ) : (
          <div className="doctors-flex-container">
            {filteredDoctors.map(eachDoctor => (
              <DoctorCard key={eachDoctor.id} doctor={eachDoctor} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default Home
