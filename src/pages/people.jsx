import React, { Component } from 'react'
import SpearTitle from "../components/SpearTitle"
import './people.css'

function SpearPerson(props){
  const leftifier = "card spread hor spear-person" + (props.isLeft ? "" : " reversed")
  return (
    <div className={leftifier}>
      <div>
        <div className="spear-person-avatar">
          <img  alt={props.name + ", " + props.title} src={require('../img/people/' + props.imgPath)}/>
        </div>
      </div>
      <div className="ver spear-person-text">
        <p className="spear-person-name">{props.name}</p>
        <p className="spear-person-title">{props.title}</p>
        <p className="spear-person-program">{"Program: " + props.program}</p>
        <p className="spear-person-quote">{"\"" + props.quote + "\""}</p>
      </div>
    </div>
  )
}

export default class SpearPeoplePage extends Component {
  render(){
    return (
      <div className="ver">
        <SpearTitle title="Our Team"/>
        <div className="ver spread">
          <SpearPerson
            name="Jacob Reckhard"
            title="Software Team"
            program="Computer Engineering, Software"
            quote="I joined SPEAR because I thought it would be a fun challenge. I stayed because I was right."
            imgPath="jacob.jpg"
            isLeft={true}
          />
          <SpearPerson
            name="Jacob Reckhard"
            title="Software Team"
            program="Computer Engineering, Software"
            quote="I joined SPEAR because I thought it would be a fun challenge. I stayed because I was right."
            imgPath="jacob.jpg"
            isLeft={false}
          />
          <SpearPerson
            name="Jacob Reckhard"
            title="Software Team"
            program="Computer Engineering, Software"
            quote="I joined SPEAR because I thought it would be a fun challenge. I stayed because I was right."
            imgPath="jacob.jpg"
            isLeft={true}
          />
          <SpearPerson
            name="Jacob Reckhard"
            title="Software Team"
            program="Computer Engineering, Software"
            quote="I joined SPEAR because I thought it would be a fun challenge. I stayed because I was right."
            imgPath="jacob.jpg"
            isLeft={false}
          />
          <SpearPerson
            name="Jacob Reckhard"
            title="Software Team"
            program="Computer Engineering, Software"
            quote="I joined SPEAR because I thought it would be a fun challenge. I stayed because I was right."
            imgPath="jacob.jpg"
            isLeft={true}
          />
          <SpearPerson
            name="Jacob Reckhard"
            title="Software Team"
            program="Computer Engineering, Software"
            quote="I joined SPEAR because I thought it would be a fun challenge. I stayed because I was right."
            imgPath="jacob.jpg"
            isLeft={false}
          />
          <SpearPerson
            name="Jacob Reckhard"
            title="Software Team"
            program="Computer Engineering, Software"
            quote="I joined SPEAR because I thought it would be a fun challenge. I stayed because I was right."
            imgPath="jacob.jpg"
            isLeft={true}
          />
        </div>
      </div>
    )
  }
}



