import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import SearchBar from './SearchBar'




describe('SearchBar', () => {
    it('renders without crashign', () => {
        const div = document.createElement('div');
        ReactDOM.render(<SearchBar />, div);
        ReactDOM.unmountComponentAtNode(div);
    })

    it('renders UI as expected', ()=> {
        const tree = renderer
            .create(<SearchBar name='search' />)
            .toJSON();
            expect(tree).toMatchSnapshot();
    })







});