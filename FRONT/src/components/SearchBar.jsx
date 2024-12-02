import React, { useState } from 'react';

const SearchBar = ({ placeholder, onSearch }) => {
    const [query, setQuery] = useState('');

    const handleInputChange = (e) => {
        const value = e.target.value;
        setQuery(value);
        onSearch(value); 
    };

    return (
        <div className="search-container">
            <input
                type="text"
                placeholder={placeholder}
                value={query}
                onChange={handleInputChange}
                className="search-input"
            />
        </div>
    );
};

export default SearchBar;
