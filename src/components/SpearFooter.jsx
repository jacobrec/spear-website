import React, { Component } from 'react'

export default class SpearFooter extends Component {
  render() {
    return (
        <div className="spear-footer ver drift" style={{alignItems: "center"}}>
          <h2 style={{margin: "1.2em"}}>CONTACT US</h2>
          <a href="mailto:spear@ualberta.ca">spearua@ualberta.ca</a>
          <a href="https://www.instagram.com/spaceualberta/">instagram: @spaceualberta</a>
          <a href="http://twitter.com/spaceualberta">twitter: @spaceualberta</a>
          <a style={{marginBottom: "1.5em"}} href="http://facebook.com/SpaceUAlberta">facebook: facebook.com/SpaceUAlberta</a>
        </div>
    )
  }
}
