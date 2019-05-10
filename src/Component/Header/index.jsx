import React, { Component } from 'react';
import logo from '../../logo.png';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return(
      <div className='Header'>
        <div><Link to= '/'><img alt='.' src={logo}></img></Link></div>
      </div>
    )
  }
}

export default Header;