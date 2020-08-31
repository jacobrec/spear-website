import React, { Component } from 'react'
import SpearTitle from "../components/SpearTitle"

export default class SpearFaqPage extends Component {
    render(){
        return (
            <div>
                <SpearTitle title="Frequently Asked Questions" />
        <div className="ver cent pad mission">
          <h1>Our Mission</h1>
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
