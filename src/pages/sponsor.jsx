import React, { Component } from 'react'
import SpearTitle from "../components/SpearTitle"

import './sponsor.css'

function Sponsor(props){
  return (
    <div className={"hor" + (props.isLeft ? "" : " reverse")}>
      <div className="sponsor-image-holder">
        {console.log(require('../img/sponsors/' + props.imgPath))}
        <img alt={props.name + " logo"} src={require('../img/sponsors/' + props.imgPath)}/>
      </div>
      <div className="sponsor-text-holder">
        <p>{props.description}</p>
      </div>
      <div style={{width:'20vw'}}></div>
    </div>
  )
}

export default class SpearSponsorPage extends Component {
  render(){
    return (
      <div className="ver">
        <SpearTitle title="Sponsors" img={require('../img/logos/supporters.svg')}/>
        <div className="sponsor-intro">
          <p>
            Without the support of our sponsors, our mission would not be
            possible. Our sponsors have allowed our team to incredible things in
            the in the past year and we hope to do more incredible things in the
            future. So, thank you for your support.
          </p>
        </div>
        <div>
          <Sponsor name="UofA" imgPath="uofa.png" isLeft={true} description=
            "UAlberta is a Top 5 Canadian university and one of the Top 100 in the world, home to more than 500 graduate programs, 200 undergraduate programs and 450 active student groups. https://www.ualberta.ca/"/>
          <Sponsor name="shell" imgPath="shell.png" isLeft={false} description=
            "The Shell Canada Enhanced Learning Fund (SELF) provides funding
            for University of Alberta students to participate in experiential
            learning opportunities that have a focus on sustainable energy, the
            environment and the economy. https://www.shell.ca/"/>
          <Sponsor name="shell" imgPath="shell.png" isLeft={true} description=
            "The Shell Canada Enhanced Learning Fund (SELF) provides funding
            for University of Alberta students to participate in experiential
            learning opportunities that have a focus on sustainable energy, the
            environment and the economy. https://www.shell.ca/"/>
          <Sponsor name="shell" imgPath="shell.png" isLeft={false} description=
            "The Shell Canada Enhanced Learning Fund (SELF) provides funding
            for University of Alberta students to participate in experiential
            learning opportunities that have a focus on sustainable energy, the
            environment and the economy. https://www.shell.ca/"/>
        </div>
      </div>
    )
  }
}
