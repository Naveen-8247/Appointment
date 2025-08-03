Doctor Appointment Booking App
- This is a Doctor Appointment Booking Web Application built using React.js. It allows users to search for doctors, view profiles, and book appointments. The backend is simulated using a doctors.json file placed in the public directory. 

### 📁 Project Structure

```
frontend/
├── public/
│   ├── doctors.json
│   ├── index.html
│   └── manifest.json
├── src/
│   ├── components/
│   │   ├── BookAppointment/
│   │   ├── Confirmation/
│   │   ├── DoctorCard/
│   │   ├── DoctorProfile/
│   │   ├── DoctorSearch/
│   │   ├── Header/
│   │   └── Home/
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   ├── index.css
│   ├── reportWebVitals.js
│   └── setupTests.js
├── package.json
├── .gitignore
└── README.md
```



Features :
- Search for doctors by name or specialization.
- Loading Spinner: A spinner is shown while doctor data is being fetched.
- View doctor profile including image, status, and specialization.
- Mobile-responsive layout
- Status color indicators: Available Today, Fully Booked, On Leave.
- Booking appointment with form validation
- Appointment confirmation screen.



Technologies Used :
- React JS
- React Router DOM
- React Icons
- HTML5 & CSS3
- CSS Media Queries for Responsive Layout across all devices.
- React Loader Spinner
- JSON as mock API (doctors.json)


How to Run the Project:
Prerequisites :
- Node.js (v16 or higher recommended)
- npm or yarn

Clone the repository
cd frontend
git clone https://github.com/Naveen-8247/DoctorAppointment.git


Install dependencies
- npm install 
This will install:
- react
- react-router-dom
- react-icons
- react-loader-spinner


Start the development server by entering below Command 
npm start
View in browser

