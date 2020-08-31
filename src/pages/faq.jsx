import React, { Component } from 'react'
import SpearTitle from "../components/SpearTitle"
import './faq.css';

export default class SpearFaqPage extends Component {
    render(){
        return (
            <div>
                <SpearTitle title="Frequently Asked Questions" />
        <div className="ver cent question-answer">
          <p className="question">Are we sending the rover to Mars?  What is the goal of the club?</p>
            <div className="answer">
                While that would be cool, we are not actually sending a rover to mars (as that may be a tad expensive). The goal of SPEAR is to build a mars-style rover which we enter in competitions against other schools. At these competitions, the teams and their rovers must complete tasks that simulate those of a Mars-like mission, and every year comes with new challenges!
            </div>
          <p className="question">How does the autonomy team differ from the controls team?</p>
            <div className="answer">
                Autonomy focuses on the software inside the rover, while Controls handle more of the electrical systems and firmware. Take the rover's arm. The autonomy team's software outputs the angle that each arm joint motor should hold. The controls team's software keeps the arm joints at those angles.
            </div>
          <p className="question">What kind of software does the autonomy team use?</p>
            <div className="answer">
                Our software is built using a robotics framework called ROS (Robot Operating System). ROS is a de facto standard in robotics due to its large collection of packages for common robotics tasks, like navigation or localization (even NASA uses it for prototyping). The software is written as a distributed collection of nodes which can be written in basically any programming language, though the ones we use are C++ and Python (but you could probably write a node in, like, OCaml if you really wanted to). We develop our software inside a Docker container. In practice, you will need to do this on a machine running Linux, either natively or in a virtual machine (not recommended). We are currently exploring the possibility of replacing ROS with ROS 2, which has native support for Windows.
            </div>
          <p className="question">What is the work/time commitment like?</p>
            <div className="answer">
                It can be as little as a couple hours a week, or as much as you want!
            </div>
          <p className="question">Do I need to have prior technical skills to join (i.e. SolidWorks, 3D printing, hand/power tools)?</p>
            <div className="answer">
                Nope! While we always appreciate whatever skills our members may bring to the table, we will teach you everything you need to know to design and build a rover.
            </div>
        </div>
            </div>
        )
    }
}
