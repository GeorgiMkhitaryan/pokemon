import React, { Component } from 'react';
import LinearDeterminate from '../Progres/index';
import { connect } from 'react-redux';
import { itemsFetchData } from '../../redux/action' 

class Species extends Component {
    componentDidMount() {
      this.props.fetchSpecies(`https://pokeapi.co/api/v2/pokemon/${this.props.match.params.id}`);
    }
  
  render() {
    
    const src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${this.props.match.params.id}.png`
    return(
      <div className='Species'>
        <div className='PokemonInfo'>
          <div className='NameInfo'><h2>{this.props.match.params.pokemons}</h2></div>
          <div className='NumberrInfo'>
            <div><h3 className='poison'>POISION</h3></div>
            <div><h3 className='grass'>GRASS</h3></div>            
            <div><h2>#{this.props.match.params.id}</h2></div>
          </div>
          <div>
            <img alt='nkar' src={src}/>
          </div>
          <div>
            <div className='pokemonspecies'>
              {
                this.props.pokemons.stats?
                  this.props.pokemons.stats.map( (pokemon) =>(
                    <LinearDeterminate 
                      base_stat = {pokemon.base_stat}
                      name = {pokemon.stat.name}
                      key ={pokemon.stat.name}
                    />
                  ))
                :
                <div><p>Loading!!!</p></div>
              }
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    pokemons: state.items,
    hasErrored: state.itemsHasErrored,
    isLoading: state.itemsIsLoading
  };
}

const mapDispatchToProps = dispatch => {
  return{
    fetchSpecies: (url) => dispatch(itemsFetchData(url))
  }
}

export default connect( mapStateToProps, mapDispatchToProps)(Species);