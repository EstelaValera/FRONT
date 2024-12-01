import React, { useState } from 'react';

const SearchBar = ({ placeholder, onSearch }) => {
    const [query, setQuery] = useState('');

    const handleInputChange = (e) => {
        const value = e.target.value;
        setQuery(value);
        onSearch(value); 
    };

    return (
        <div style={{ margin: '20px', textAlign: 'center' }}>
            <input
                type="text"
                placeholder={placeholder}
                value={query}
                onChange={handleInputChange}
                style={{ padding: '10px', width: '300px' }}
            />
        </div>
    );
};

export default SearchBar;
