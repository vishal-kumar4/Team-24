import React from 'react'
import Complaint from './Complaint.js'
import DryWaste from './DryWaste.js'
import Location from './Map.js'
import Recycle from './Recycle.js'
import Menstrl from './Menstrl.js'
import Login from './Login.js'
import Card from './Card.js'
import Logo from './Logo.png'
import Signup from './Signup.js'

import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";

export default function Navbar() {
  return (
    <Router>
        <div className="container_nav">
        <h3 className='heads' > <Link to='/' style={{color:"white" , textDecoration:"none" }}>
               Waste Management System</Link><img src={Logo} alt="/" id='logo'style={{marginLeft:"5px"}}/></h3>
          <div className="btn-group dropend" id='signup'>
            <button type="button" className="btn btn-secondary dropdown-toggle" id='signupbtn' data-bs-toggle="dropdown" aria-expanded="true">
              <p id='auths'>Authorized View</p>
            </button>
            <ul className="dropdown-menu">
              {/* <li><Link className="dropdown-item" to="/login">Sign In/Sign up</Link></li> */}
              <li><Link className="dropdown-item" to="/login">Sign In</Link></li>
              <li><Link className="dropdown-item" to="/signup">Sign Up</Link></li>
              <li><Link className="dropdown-item" to="/complaint">Contact us</Link></li>
            </ul>
          </div>
        </div>
          <Routes>
          {/* <Route path="/" element={<Mainpage />}/> */}
          <Route path="/" element={<Card />}/> 
          <Route path="/wastes" element={<DryWaste />}/> 
          <Route path="/location" element={<Location />}/>
          <Route path="/complaint" element={<Complaint />}/>
          <Route path="/menstrual" element={<Menstrl />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/recyle" element={<Recycle />}/>
          <Route path= "/signup" element={<Signup />}/>
        </Routes>
    </Router>
  )
}
