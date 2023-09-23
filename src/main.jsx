import React from 'react'
import ReactDOM from 'react-dom/client'
import DonationPage from './DonationPage.jsx'
import Navbar from './Navbar.jsx'
import Info from './Info.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar />
    <DonationPage />
    <Info />
  </React.StrictMode>,
)
