import React, { Component } from 'react';
import Header from './Component/Header/';
import Main from './Component/Main/';
import Species from './Component/Species/';
import { Switch, Route } from "react-router-dom";
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './redux/reducers'
import Thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension'
import './App.scss'

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(Thunk)))

class App extends Component {
  render() {
    return(
      <Provider store = {store}>
        <div className='App'>
          <Header />
          <Switch>
            <Route exact path="/" component={ Main } />
            <Route exact path={`/:pokemons/:id`} component={ Species } />
          </Switch>
        </div>
      </Provider>
    )
  }
}

export default App;
