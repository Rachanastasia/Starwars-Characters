import React from 'react';
import Context from '../../Context'

export default function ResetButton(props) {

    const handleButton = (event, clearResults) => {
        event.preventDefault();
        props.term(' ')
        clearResults();
    }

    return (
        <Context.Consumer>{({ clearResults }) =>
            <button type="submit" className='form_button'
                onClick={(e) => handleButton(e, clearResults)}
            >Reset</button>
        }
        </Context.Consumer>
    );

}