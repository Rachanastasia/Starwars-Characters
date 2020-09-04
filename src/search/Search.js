import React from 'react';
import ResetButton from './buttons/ResetButton';
import SearchButton from './buttons/SearchButton';
import SearchBar from './searchBar/SearchBar';
import Context from '../Context';

import config from '../config'

export default class Search extends React.Component {

    static contextType = Context;

    handleForm = (e) => {
        e.preventDefault();

        const val = e.target.search_bar.value;

        fetch(`${config.API_ENDPOINT}${val}`)
            .then(res => res.json())
            .then(data => {
                data.results.map(result =>
                    this.context.create(result.name, result.gender, result.hair_color)
                )
            })
            .catch(err => console.log(err.message));

    }

    render() {
        const setTerm = this.context.setSearchTerm;

        return (
            <form onSubmit={e => this.handleForm(e)}  >
                <SearchBar term={setTerm} val={this.context.searchTerm} />
                <SearchButton />
                <ResetButton term={setTerm} />
            </form>
        )
    }

}


// .then(res => {
//     if(res.ok){
//         return res.json()
//     } else {
//         console.log('this was unable to be fetched')
//     }
// })
// .then(data => 
