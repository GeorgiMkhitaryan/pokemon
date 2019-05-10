import React, { Component } from 'react';
import { connect } from 'react-redux';

class Pokemon extends Component {
  
  render() {
    const {name, id} = this.props;
    return(
      <div className='Pokemon'>
        <p>{id}</p>
        <img alt='nkar' src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}></img>
        <span>{name}</span>
      </div>
    )
  }
}

export default connect()(Pokemon);