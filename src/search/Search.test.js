import React from 'react';
import ReactDOM from 'react-dom';
import Searh from './Search'




describe('Search', () =>{
it.skip('renders without crashign', () =>{
    const div = document.createElement('div');
    ReactDOM.render(<Search />, div);
    ReactDOM.unmountComponentAtNode(div);
})
});