import React, { Component } from 'react'
import './home.css';


export default class SpearHomePage extends Component {
  render(){
    return (
      <div className="page">
        <div className="img-container">
          <img alt="some members of SPEAR with our rover, this was taken at our first competition" className="spear-home-main-image" src={require('../img/team.jpg')} />
          <div className="centered">Space Exploration Alberta Robotics</div>
        </div>

        <div className="ver cent pad">
          <h2>Our Mission</h2>
          <div>
            Our student project group, Space Exploration Alberta Robotics, aims to
            promote space ex- ploration technology and robotics through educational
            outreach and participating in design competitions. SPEAR is motivated
            to be a positive force in our community. Beyond our edu- cational
            outreach we also support other groups at the university with positive
            goals. We are proud to help promote groups such as, Women in
            Engineering, Science, and Technology and Diversity in Engineering.
          </div>
        </div>
      </div>
    )
  }
}

