import React from 'react'
import './price.css'
import { Link } from 'react-router-dom'

function price() {
  return (
    <div className='price'>
      <div className='card-container'>
        <div className='card'>
          <h3>- Basic -</h3>
          <spa className='bar'></spa>
          <p className='btc'>$ 100</p>
          <p>- 3 Days -</p>
          <p>- 3 Pages -</p>
          <p>- Featured -</p>
          <p>Responsive Design</p>
          <Link to='/contact' className='btn'>PURCHASE NOW</Link>
        </div>

        <div className='card'>
          <h3>- Standard -</h3>
          <spa className='bar'></spa>
          <p className='btc'>$ 300</p>
          <p>- 3 Days -</p>
          <p>- 5 Pages -</p>
          <p>- Featured -</p>
          <p>Responsive Design</p>
          <Link to='/contact' className='btn'>PURCHASE NOW</Link>
        </div>

        <div className='card'>
          <h3>- Primium -</h3>
          <spa className='bar'></spa>
          <p className='btc'>$ 600</p>
          <p>- 5 Days -</p>
          <p>- 7 Pages -</p>
          <p>- Featured -</p>
          <p>Responsive Design</p>
          <Link to='/contact' className='btn'>PURCHASE NOW</Link>
        </div>
      </div>
    </div>
  )
}

export default price