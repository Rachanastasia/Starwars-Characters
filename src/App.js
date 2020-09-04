import React, {Component} from 'react';

import Context from './Context';

import Header from './header/Header';
import Search from './search/Search';
import Results from './results/Results'

export default class App extends Component{

  state = {
    showResults: false,
    searchTerm: '',
    results: []
  }
  
//   createCharacter = (name, homeworld, species, films) => {
//     return {
//       name,
//       homeworld,
//       species,
//       films : []
//     };    
// }

createCharacter = (name, gender, hair_color) => {
  const char = {
    name, 
    gender, 
    hair_color
  }
  this.setState({
    results: [...this.state.results, char],
    showResults: true,
  })
}
//search button should show results
//call from function that brings back data from api
handleClearResults = () => {
  this.setState({
    searchTerm: '',
    results: [],
    showResults: false
  })

}

setSearchTerm = (term) => {
  this.setState({
    searchTerm: term
  })
}
  
  render(){
    console.log(this.state.searchTerm)

  const value = {
      searchTerm: this.state.searchTerm,
      results: this.state.results,
      showResults: this.state.showResults,
      clearResults: this.handleClearResults,
      create: this.createCharacter,
      setSearchTerm: this.setSearchTerm
  };

  return (
      <Context.Provider value={value}>
      <Header />
      <Search />
      {this.state.showResults ? <Results /> : ''}
    
      </Context.Provider>
    );
  };
};
