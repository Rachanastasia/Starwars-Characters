import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';




describe('Header', () =>{
it('renders without crashign', () =>{
    const div = document.createElement('div');
    ReactDOM.render(<Header />, div);
    ReactDOM.unmountComponentAtNode(div);
})
});