import React, { Component } from 'react'
import { Link } from "react-router-dom";

export default class SpearHeader extends Component {
    render() {
        const tabs = [
            {display: "Info", link: "info"},
            {display: "People", link: "people"},
            {display: "Sponsors", link: "sponsors"},
            {display: "Blog", link: "blog"},
            {display: "Contact", link: "contact"},
        ]
        const listItems = tabs.map((d) => <Link key={d.link} to={"/"+d.link}><li>{d.display}</li></Link>);
        const imgStyle = {
            borderRadius: "100%",
            boxShadow: "10px 10px 5px 0px rgba(0,0,0,0.75)",
            height: "20vh",
            width: "20vh",
            backgroundImage: `url(${require('../img/logo.png')})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center",
            border: 0
        }
        return (
            <header className="App-header">
              <div style={{alignItems: "center"}} className="hor wide pad-x">
                <Link style={imgStyle} to="/" > </Link>
                    <div className="ver">
                        <ul className="hor spear-nav-list cent pad-x"> {listItems} </ul>
                        <img alt="pretty abstract mountains for decoration" className="spear-mountains" src={require('../img/mtshdw.svg')} />
                    </div>
                </div>
            </header>
        )
    }
}
