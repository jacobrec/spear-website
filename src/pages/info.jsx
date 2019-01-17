import React, { Component } from 'react'
import SpearTitle from "../components/SpearTitle"

export default class SpearInfoPage extends Component {
    render(){
        const vlogs = ["lDlzEwEM7iU", "wTmVX3USq54", "Qt7kQpG_Ohk"]
        return (
            <div>
                <SpearTitle title="Info" img={require('../img/logos/supporters.svg')}/>

                <div className="ver cent">
                    <h2>Competition Video Log</h2>
                    { vlogs.map((v, i) => (
                        <iframe title={`vlog${i+1}`} key={v} width="560" height="315"
                            src={`https://www.youtube.com/embed/${v}`}
                            frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen></iframe>
                    ))}
                </div>
            </div>
        )
    }
}
