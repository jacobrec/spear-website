import React from 'react'
import { Link } from "react-router-dom";

export default () => {
    const tabs = [
        { display: "Info", link: "info" },
        { display: "People", link: "people" },
        //{display: "Sponsors", link: "sponsors"},
        { display: "Blog", link: "blog" },
        { display: "Contact", link: "contact" },
    ]
    const listItems = tabs.map((d) => <li><Link key={d.link} to={"/" + d.link}> {d.display} </Link></li>);
    return (
        <header className="App-header">

            <div style={{ alignItems: "center" }} className="hor wide">
                <Link style={{ backgroundImage: `url(${require('../img/logo.png')})` }} className="circle-shadow spear-logo" to="/" ></Link>
                <div className="ver spear-mountains-wrapper spread">
                    <ul className="hor spear-nav-list spread"> {listItems} </ul>
                    <img alt="pretty abstract mountains for decoration" className="spear-mountains" src={require('../img/mtshdw.png')} />
                </div>
            </div>
        </header>
    )
}