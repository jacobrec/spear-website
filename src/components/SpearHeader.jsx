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
        return (
            <header className="App-header">
                <div className="hor wide pad-x">
                    <Link to="/"> <img alt="the logo of SPEAR" className="spear-logo" src={require('../img/logo.png')} /></Link>
                    <div className="ver">
                        <ul className="hor spear-nav-list cent pad-x"> {listItems} </ul>
                        <img alt="pretty abstract mountains for decoration" className="spear-mountains" src={require('../img/mountains.svg')} />
                    </div>
                </div>
            </header>
        )
    }
}
