import React, { Component } from 'react';
import Pokemon from '../Pokemon/';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { offsetChange } from '../../redux/action';
import Example from '../Pageination/Pageination';

class Main extends Component {
  componentDidMount() {
    this.props.fetchData(0);
  }

  getIdByUrl(url) {
    return parseInt(url.replace('https://pokeapi.co/api/v2/ability/', ''));
  }
  getName(name) {
    const newname = name.charAt(0).toUpperCase()
    const a = name.slice(1, name.length-1)
    const fullname = newname.concat(a)
    return fullname
  }
    
  render() {
    console.log(this.props)
    return(
      <div>
          <div className='Example'>
            <Example />
          </div>
          <div className='Main'>
            {
              this.props.pokemons?
                this.props.pokemons.map( (pokemon) =>(
                  <Link to={`/${this.getName(pokemon.name)}/${this.getIdByUrl(pokemon.url)}`} key= {pokemon.name}>
                      <Pokemon 
                        name = {this.getName(pokemon.name)}
                        url = {pokemon.url}
                        id = {this.getIdByUrl(pokemon.url)}
                      />
                  </Link>
                ))
              :
              <div><p>Loading!!!</p></div>
            }
          </div>
      </div>
    )
  }
}
const mapStateToProps = state => {
  return {
    offset: state.offsetChange,
    pokemons: state.items.results,
    hasErrored: state.itemsHasErrored,
    isLoading: state.itemsIsLoading
  };
}

const mapDispatchToProps = dispatch => {
  return{
    fetchData: (url) => dispatch(offsetChange(url))
  }
}
export default connect( mapStateToProps, mapDispatchToProps)(Main);