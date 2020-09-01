import React, { Component } from 'react'
import './home.css';
import caseimage from '../img/outline.png';


export default class SpearHomePage extends Component {
  render(){
    return (
      <div className="page">
        <div className="img-container">
          <img alt="some members of SPEAR with our rover, this was taken at our first competition" className="spear-home-main-image" src={require('../img/team.jpg')} />
          <h1 className="centered">Space Exploration Alberta Robotics</h1>
        </div>
         <div className="ver cent mission">
           <h2>Our Mission</h2>
            <div>
            Our student project group, Space Exploration Alberta Robotics, aims to
            promote space exploration technology and robotics through educational
            outreach and participating in design competitions. SPEAR is motivated
            to be a positive force in our community. Beyond our educational
            outreach we also support other groups at the university with positive
            goals. We are proud to help promote groups such as, Women in
            Engineering, Science, and Technology and Diversity in Engineering.
            </div>
            <a href="http://join.spaceualberta.ca/" className="Join-Button">Join SPEAR</a>
         </div>
       </div>
    )
  }
}

