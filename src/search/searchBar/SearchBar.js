import React from 'react';

export default function SearchBar(props) {

    const setTerm = e => props.term(e.target.value);

    return (
        <>
            <label htmlFor="search_bar"></label>
            <input type="text" name="search_bar" onChange={e => setTerm(e)} value={props.val} />
        </>
    )
}