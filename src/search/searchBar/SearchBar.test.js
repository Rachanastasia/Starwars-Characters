import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './SearchBar'




describe('SearchBar', () =>{
it.skip('renders without crashign', () =>{
    const div = document.createElement('div');
    ReactDOM.render(<SearchBar />, div);
    ReactDOM.unmountComponentAtNode(div);
})
});