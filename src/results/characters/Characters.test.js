import React from 'react';
import ReactDOM from 'react-dom';
import Characters from './Characters'




describe('Characters', () =>{
it.skip('renders without crashign', () =>{
    const div = document.createElement('div');
    ReactDOM.render(<Characters />, div);
    ReactDOM.unmountComponentAtNode(div);
})
});