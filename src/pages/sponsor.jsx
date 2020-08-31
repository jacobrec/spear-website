import React, { Component } from 'react'
import SpearTitle from "../components/SpearTitle"

import './sponsor.css'

function Sponsor(props){
  return (
    <div className={"sponsor hor" + (props.isLeft ? "" : " reverse")}>

      <div className="sponsor-image-holder">
        {console.log(require('../img/sponsors/' + props.imgPath))}
        <img alt={props.name + " logo"} src={require('../img/sponsors/' + props.imgPath)}/>
      </div>
      
      <div className="sponsor-text-holder">
        <p> { props.description } </p>
      </div>

      <div style={{width:'20vw'}}></div>

    </div>
  )
}

const uofa = { img: "uofa.png", description: "UAlberta is a Top 5 Canadian university and one of the Top 100 in the world, home to more than 500 graduate programs, 200 undergraduate programs and 450 active student groups. https://www.ualberta.ca/" }
const shell = { img: "shell.png", description: "The Shell Canada Enhanced Learning Fund (SELF) provides funding for University of Alberta students to participate in experiential learning opportunities that have a focus on sustainable energy, the environment and the economy. https://www.shell.ca/" }
const protocase = { img: "protocase.png", description: "Protocase is a company that manufactures custom sheet metal and CNC machined electronic encolsures for mounting hardware and electronics. Customers provide a design, and they machine it. https://www.protocase.com/"}
const Digikey = { img: "digi-key.png", description: "Digi-key is a large electronic component distributor in North America and a broad-line distributor of board level components. https://www.digikey.ca/" }
const Solidworks = { img: "solidworks.png", description: "Solidworks is a solid modeling computer-aided design (CAD) and computer-aided engineering (CAE) software used by millions of engineers and designers worldwide. https://www.solidworks.com/" }

const sponsors = [uofa, shell, protocase, Digikey, Solidworks]
export default class SpearSponsorPage extends Component {
  render() {
    return (
      <div className="ver">
        <SpearTitle title="Sponsors" img={require('../img/logos/supporters.svg')} />

        <div className="sponsor-intro">
            <p> Without the support of our sponsors, our mission would not be
            possible. Our sponsors have allowed our team to incredible things in
            the in the past year and we hope to do more incredible things in the
            future. So, thank you for your support. </p>
        </div>

        <div>
          { sponsors.map((s, i) => (
              <Sponsor name={s.img.split('.')[0]} isLeft={i%2===0}
                       imgPath={s.img} description={s.description} />
          )) }
        </div>
      </div>
    )
  }
}
