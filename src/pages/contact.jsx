import React, { Component, Fragment } from "react"
import SpearTitle from "../components/SpearTitle"
import "./contact.css"

const serverLoc = "http://spaceualberta.ca:8888"
//const serverLoc = "http://localhost:5000/join"

function handleForm(e){
  e.preventDefault()
  let data = {
    teamid: document.forms[0].team.value,
    name: document.forms[0].name.value,
    email: document.forms[0].email.value,
    msg: document.forms[0].message.value,
  }
  sendData(data)
  return false
}

function sendData(data){
  var xhr = new XMLHttpRequest();
  xhr.open("POST", serverLoc, true);
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.setRequestHeader('Access-Control-Allow-Origin', '*');
  xhr.withCredentials = true;
  xhr.onreadystatechange = function () {
    console.log("returned: ", xhr)
    if (xhr.readyState === 4 && xhr.status === 200) {
      alert("Thanks, got your message");
      // window.location.href = "http://spaceualberta.ca";
    }
  };
  xhr.send(JSON.stringify(data));
  console.log("Sent: ", data)
}


function JoinView(props){
  const teams = [
    {name:"ECE", id: "0"},
    {name:"Science", id: "1"},
    {name:"Mechanical", id: "2"},
    {name:"Marketing", id: "3"},
    {name:"Finance", id: "4"},
  ]
  return (
    <div className="ver cent">
      <p> Hey, thanks for your interest. Please fill out this form, and we will get back to you! </p>
      <form className="col-75 ver cent pad-x" method="post" action={serverLoc} onSubmit={(e) => handleForm(e)}>
        <div className="fields wide">
          <div className="hor cent">
            <div className="col-33">
              <label>Name</label>
              <input type="text" name="name"/>
            </div>
            <div className="col-33">
              <label>Email</label>
              <input type="text" name="email"/>
            </div>

            <div className="col-33">
              <label>SPEAR team</label>
              <select name="team" >
                {teams.map((t) => <option key={t.id} value={t.id}> {t.name} </option>)}
              </select>
            </div>
          </div>

          <div className="field hor wide">
            <label>Message</label>
            <textarea className="wide" name="message" rows="4"></textarea>
          </div>
        </div>
        <ul className="actions hor drift wide">
          <li><input type="submit" value="Send Message" className="primary" /></li>
          <li><input type="reset" value="Reset" /></li>
        </ul>
      </form>

    </div>
  )
}

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
    this.setState({ view: view })
  }

  render(){
    let view = (
      <Fragment>
        <IntroView nav={(v) => this.gotoView(v)}/>
      </Fragment>
    )

    if(this.state.view === 1){
      view = <JoinView nav={(v) => this.gotoView(v)}/>
    }
    return (
      <div className="ver">
        <SpearTitle title="Contact" img={require("../img/logos/contact.svg")}/>
        { view }
      </div>
    )
  }
}


