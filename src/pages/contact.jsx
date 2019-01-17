import React, { Component, Fragment } from 'react'
import SpearTitle from "../components/SpearTitle"
import './contact.css'

function IntroButton(props){
  console.log(props)
  return (
    <button className="card contact-card" onClick={() => {props.onClick()}}>
      {props.text}
    </button>
  )
}
function IntroView(props){
  console.log(props)
  return (
    <div className="pad">
      <div className="hor drift">
        <IntroButton text="I would like to join!" onClick={() => props.nav(1)} />
        <IntroButton text="I would just like to contact" onClick={() => props.nav(2)}/>
      </div>
    </div>
  )
}
function handleForm(){
  var data = {
    teamid: document.forms[0].team.value,
    name: document.forms[0].name.value,
    email: document.forms[0].email.value,
    msg: document.forms[0].message.value,
  };
  sendData(data);
  return false;
}
function sendData(data){
  var xhr = new XMLHttpRequest();
  xhr.open("POST", "http://rac.reckhard.win:8888", true);
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      alert("Thanks, got your message");
      window.location.href = 'http://join.spaceualberta.ca';
    }
  };
  xhr.send(JSON.stringify(data));
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
      <form className="wide ver cent pad-x" method="post" action="spaceualberta.ca:8888/join" onSubmit={handleForm}>
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
                {teams.map((t) => <option key={t.id} value={t.id}>{t.name}</option>)}
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

function ContactView(props){
  return (
    <div className="ver pad card">
      <p> The best way to contact us is via our email. <a
          href="mailto:spearua@ualberta.ca">spearua@ualberta.ca</a> However, it
        may be faster to send us a message on our <a href="http://facebook.com/SpaceUAlberta">facebook</a>.
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
    }else if(this.state.view === 2){
      view = <ContactView nav={(v) => this.gotoView(v)}/>
    }

    return (
      <div className="ver">
        <SpearTitle title="Contact" img={require('../img/logos/supporters.svg')}/>
        { view }
      </div>
    )
  }
}


