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

  const jacob = {
    name:"Jacob Reckhard",
    title:"Project Manager",
    program:"Computer Engineering, Software Coop",
    quote:"I joined SPEAR because I thought it would be a fun challenge. I stayed because I was right.",
    imgPath:"jacob.jpg"
  }
const manmeet = {
    name:"Manmeet Brar",
    title:"Project Manager",
    program:"Mechanical Engineering",
    quote:"I joined SPEAR because I wanted to get involved with an awesome project I'm passionate about",
    imgPath:"manmeet.jpg"
  }
const andre = {
    name: "Andre Ulliac",
    title: "Co Project Manager",
    program: "Mechanical Engineering Coop",
    quote: "I joined SPEAR because space is awesome and so are robots",
    imgPath: "andre.jpg"
  }
const noel = {
    name: "Noel Gore",
    title: "Science Team Lead",
    program: "Geophysics",
    quote: "I joined SPEAR because I’ve always been intrigued by the way space exploration pushes boundaries and I wanted the chance to do the same",
    imgPath: "noel.jpg"
  }
const david = {
    name: "David Lenfesty",
    title: "Electrical Team Lead",
    program: "Electrical Nanoengineering Coop",
    quote: "I joined SPEAR because it offered a great opportunity to gain some experience with designing robotics",
    imgPath: "david.jpg"
  }
const robert = {
    name: "Robert Williams",
    title: "Finance Team Lead",
    program: "Bachelor of Commerce Accounting",
    quote: "I joined SPEAR because it is interesting and the team was very welcoming",
    imgPath: "robert.jpg"
  }
const navras = {
    name: "Navras Kamal",
    title: "Co Project Manager",
    program: "Computer Engineering, Nano Coop",
    quote: "I joined SPEAR because it was a unique opportunity to help start up a relatively new design project",
    imgPath: "navras.jpg"
  }
const kyle = {
    name:"Kyle Hennig",
    title:"Software Team Lead",
    program:"Computer Engineering, Software Coop",
    quote:"I joined SPEAR because Jacob told me to",
    imgPath:"kyle.jpg"
  }
const ryan = {
    name:"Ryan Shukla",
    title:"Autonomy Lead",
    program:"Computer Engineering, Software Coop",
    quote:"I joined SPEAR because I wanted to learn about robotics while working on a project I could be proud of. I stayed for the pals I made!",
    imgPath:"ryan.jpg"
  }
const pat = {
    name:"Pat Makhacheva",
    title:"Science Lead",
    program:"Biology and Psychology Double Major",
    quote:"I joined SPEAR cause Jacob made me",
    imgPath:"pat.jpg"
  }
const christiana = {
    name:"Christiana Garros",
    title:"Marketing Lead",
    program:"Biology Major",
    quote:"I also joined SPEAR cause Jacob made me",
    imgPath:"christiana.jpg"
  }
const mitchell = {
    name:"Mitchell Epp",
    title:"Autonomy Lead",
    program:"Computer Engineering, Software Co-op",
    quote:"I joined SPEAR to program robots.",
    imgPath:"mitchell.png"
  }
const navodi = {
    name:"Navodhi Ranatunga",
    title:"Science Lead",
    program:"Science, Specialization in Geology",
    quote:"I joined spear to gain experience in applying my science knowledge in a creative and  pratical way with students from different disciplines.",
    imgPath:"navodi.png"
  }
const lani = {
    name:"Noelani “Lani” Breton",
    title:"Mechanical Engineering Lead",
    program:"Mechanical Engineering Co-op ",
    quote:"I joined SPEAR to become part of a really cool team of people doing really cool things. Also, space robots.",
    imgPath:"lani.png"
  }


const people = [
  jacob,
  ryan,
  mitchell,
  navodi,
  christiana,
  lani,
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
        <p className="spear-person-name"> {props.name} </p>
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
