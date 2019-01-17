import React, { Component } from 'react'
import SpearTitle from "../components/SpearTitle"

export default class SpearInfoPage extends Component {
    render(){
        return (
            <div>
                <SpearTitle title="Info" img={require('../img/logos/supporters.svg')}/>

                <div className="ver cent">
                    <h2>Competition Video Log</h2>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/lDlzEwEM7iU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/wTmVX3USq54" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/Qt7kQpG_Ohk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </div>
        )
    }
}
