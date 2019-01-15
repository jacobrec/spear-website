import React, { Component } from 'react'

const styleDiv = {
    width: '100vw',
    backgroundColor: 'var(--spear-green)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
};

const styleHeader = {
    textTransform: 'uppercase',
};

export default class SpearTitle extends Component {
  render() {
    return (
      <div style={styleDiv}>
        <h1 style={styleHeader}>{this.props.title}</h1>
      </div>
    )
  }
}

