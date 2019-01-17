import React, { Component } from 'react'

const styleDiv = {
  width: '30vw',
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
};

const styleHeader = {
  textTransform: 'uppercase',
  fontSize: "3em"
};

const styleImg = {
  height: "3em"
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

