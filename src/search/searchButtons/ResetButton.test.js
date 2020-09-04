import React from 'react';
import ReactDOM from 'react-dom';
import ResetButton from './ResetButton'




describe('ResetButton', () =>{
it.skip('renders without crashign', () =>{
    const div = document.createElement('div');
    ReactDOM.render(<ResetButton />, div);
    ReactDOM.unmountComponentAtNode(div);
})
});