import React from 'react';


export default React.createContext({
    showResults: '',
    searchTerm: '',
    results: [],
    clearResults: () => {},
    setSearchTerm: () => {},
    create: () => {}
})