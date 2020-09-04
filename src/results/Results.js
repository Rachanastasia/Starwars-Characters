import React from 'react';
import Characters from './characters/Characters';
import Context from '../Context';

export default class Results extends React.Component{

    static contextType = Context;
   
    render(){
        return (
            <>
            <h2>Results</h2>
            {/* <Characters /> */}
            </>
        )
    }
}