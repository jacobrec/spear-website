import React, { Component, Fragment } from "react"
import SpearTitle from "../components/SpearTitle"
import "./contact.css"

function IntroView (props) {
  const tWidth = 350;
  const tHeight = 500;
  return (
    <div style={{width: "60vw", margin: "0 20vw"}}>
      <div style={{display: "flex"}}>
        <div style={{justifyContent: "center", display: "flex", width: "50%", flexDirection: "column"}}>
          <p className="old-person-font">We are always excited about new members! If you are interested in joining SPEAR, click the icon below!</p>
          <button onClick={() => props.nav(1)}>
            Join
          </button>
        </div>
        <div style={{justifyContent: "center", display: "flex", width: "50%"}}>
          <a className="twitter-timeline" data-width={tWidth} data-height={tHeight} data-theme="dark" href="https://twitter.com/spaceualberta?ref_src=twsrc%5Etfw">Tweets by spaceualberta</a>
        </div>
      </div>
      <p className="old-person-font">
        We are also active on social media! Find us @spaceualberta on Twitter and Instagram, and on Facebook at facebook.com/spaceualberta. You can also send us an email at spearua@ualberta.ca
      </p>
    </div>
  )
}

export default class SpearContactPage extends Component {
  constructor(props){
    super(props)
    this.state = {
      view: 0,
    }
  }

  componentDidMount () {
     const script = document.createElement("script");
     script.src = "https://platform.twitter.com/widgets.js";
     script.async = true;
     document.body.appendChild(script);
    }

  gotoView(view){
    window.location.href = "http://join.spaceualberta.ca"
  }

  render(){
    let view = (
      <Fragment>
        <IntroView nav={(v) => this.gotoView(v)}/>
      </Fragment>
    )
    return (
      <div className="ver">
        <SpearTitle title="Contact" img={require("../img/logos/contact.svg")}/>
        { view }
      </div>
    )
  }
}


