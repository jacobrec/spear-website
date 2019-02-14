import React, { Component } from 'react'
import SpearTitle from "../components/SpearTitle"
import './people.css'

/*
 To update the people on the website, simply change the contents of this array
 The array is an array of objects with this structure
  {
    name:"Jacob Reckhard", // this is the full name
    title:"Software Team", // this is their title within the team
    program:"Computer Engineering, Software Coop", // this is the program they are in
    quote:"I joined SPEAR because I thought it would be a fun challenge. I stayed because I was right.", // this is their quote
    imgPath:"jacob.jpg" // this is the name of the image, it will always be found within ../img/people/
  },
  * */
const people = [
  {
    name:"Manmeet Brar",
    title:"Project Manager",
    program:"Mechanical Engineering",
    quote:"I joined SPEAR because I wanted to get involved with an awesome project I'm passionate about",
    imgPath:"manmeet.jpg"
  },
  {
    name: "Andre Ulliac",
    title: "Mechanical Team Lead",
    program: "Mechanical Engineering Coop",
    quote: "I joined SPEAR because space is awesome and so are robots",
    imgPath: "andre.jpg"
  },
  {
    name: "Noel Gore",
    title: "Science Team Lead",
    program: "Geophysics",
    quote: "I joined SPEAR because I’ve always been intrigued by the way space exploration pushes boundaries and I wanted the chance to do the same",
    imgPath: "noel.jpg"
  },
  {
    name: "David Lenfesty",
    title: "Electrical Team Lead",
    program: "Electrical Nanoengineering Coop",
    quote: "I joined SPEAR because it offered a great opportunity to gain some experience with designing robotics",
    imgPath: "david.jpg"
  },
  {
    name: "Robert Williams",
    title: "Finance Team Lead",
    program: "Bachelor of Commerce Accounting",
    quote: "I joined SPEAR because it is interesting and the team was very welcoming",
    imgPath: "robert.jpg"
  },
  {
    name: "Navras Kamal",
    title: "Social Media Team Lead",
    program: "Computer Engineering, Nano Coop",
    quote: "I joined SPEAR because it was a unique opportunity to help start up a relatively new design project",
    imgPath: "navras.jpg"
  },
  {
    name:"Kyle Hennig",
    title:"Software Team Lead",
    program:"Computer Engineering, Software Coop",
    quote:"I joined SPEAR because Jacob told me to",
    imgPath:"kyle.jpg"
  },
  {
    name:"Ryan Shukla",
    title:"Software Team",
    program:"Computer Engineering, Software Coop",
    quote:"I joined SPEAR because I wanted to learn about robotics while working on a project I could be proud of. I stayed for the pals I made!",
    imgPath:"ryan.jpg"
  },
  {
    name:"Jacob Reckhard",
    title:"Software Team",
    program:"Computer Engineering, Software Coop",
    quote:"I joined SPEAR because I thought it would be a fun challenge. I stayed because I was right.",
    imgPath:"jacob.jpg"
  },
];


function SpearPerson(props){
  return (
    <div className={`spread hor spear-person ${!props.isLeft && "reversed"}`}>
      <div>
        <div className="spear-person-avatar circle-shadow">
          <img alt={props.name + ", " + props.title} src={require('../img/people/' + props.imgPath)}/>
        </div>
      </div>
      <div className="ver spear-person-text">
        <p className="spear-person-name">{props.name}</p>
        <p className="spear-person-title">{props.title}</p>
        <p className="spear-person-program">{"Program: " + props.program}</p>
        <p className="spear-person-quote">{"\"" + props.quote + "\""}</p>
        <hr/>
      </div>
    </div>
  )
}

export default class SpearPeoplePage extends Component {
  render(){
    return (
      <div className="ver">
        <SpearTitle title="Our Team" img={require('../img/logos/team.svg')}/>
        <div className="ver spread">
          { people.map((person, index) => <SpearPerson key={index} {...person} isLeft={index % 2 === 0}/>) }
        </div>
      </div>
    )
  }
}
