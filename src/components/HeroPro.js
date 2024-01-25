import React, { Component } from 'react'
import './HeroPro.css'

class HeroPro extends Component {
  render() {
    return (
      <div className='heropro'>
          <div className='headig'>
            <img src={this.props.image} alt='backimage' />
            <h1>{this.props.heading}</h1>
            <p>{this.props.text}</p>
          </div>
      </div>
    );
  }
}

export default HeroPro;