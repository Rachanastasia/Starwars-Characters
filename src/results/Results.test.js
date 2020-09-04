import React from 'react';
import ReactDOM from 'react-dom';
import Results from './Results'




describe('Results', () =>{
it.skip('renders without crashign', () =>{
    const div = document.createElement('div');
    ReactDOM.render(<Results />, div);
    ReactDOM.unmountComponentAtNode(div);
})
});