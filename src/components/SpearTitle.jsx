import React, { Component } from 'react'

const styleDiv = {
  maxWidth: '80vw',
  minWidth: '10vw',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-around',
};

const styleDivOuter = {
  width: '100vw',
  backgroundColor: 'var(--spear-green)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-around',
  marginBottom: '20px'
};

const styleHeader = {
  textTransform: 'uppercase',
  fontSize: "4vw"
};

const styleImg = {
  height: "4vw",
  padding: "1.5vw"
};

export default class SpearTitle extends Component {
  render() {
    return (
      <div style={styleDivOuter}>
        <div style={styleDiv}>
          {this.props.img && <img alt="A svg logo for decoration" style={styleImg} src={this.props.img}/> }
          <h1 style={styleHeader}>{this.props.title}</h1>
        </div>
      </div>
    )
  }
}

