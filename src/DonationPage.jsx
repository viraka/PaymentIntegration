import { useState, useEffect } from 'react'
import config from './config'
import axios from 'axios'
import './App.css'


function loadButton(src) {
  const form = document.createElement('form')
  const script = document.createElement('script')
  const Dons = document.querySelectorAll('.DonationPage')
  script.src = src
  script.setAttribute('data-payment_button_id', 'pl_MeQos5pYSCVMl4')
  form.appendChild(script)
  for (let i = 0; i < Dons.length; ++i) {
    Dons[i].appendChild(form);
    console.log("done" + i)
  }

}

function DonationPage() {

  return (
    <>
      <div className='Picture image-container'>
        <img src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="donation"
          onLoad={() => loadButton('https://checkout.razorpay.com/v1/payment-button.js')} />
        <div className="image-text">
          <h2 className='kids'>Pay What You Can</h2>
        </div>
      </div>
      <div className="DonationPage" >
        <p className='razor' >Razorpay Payment Integration Using React</p>
        <br />


      </div>
    </>
  );
}
export default DonationPage;


