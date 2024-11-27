import React, { useState } from 'react';
import axios from 'axios';

const SearchBar = ({ onSearch }) => {
    const [query, setQuery] = useState('');
    const [artworks, setArtworks] = useState([]);
    const [error, setError] = useState('');


    const handleSearch = async () => {
        if (!query.trim()) return;

        try {
            setError('');
            const response = await axios.get('/api/artworks/search', {
                params: { query },
            });

            if (response.data.length > 0) {
                setArtworks(response.data); 
            } else {
                setError('No artworks found.');
                setArtworks([]); 
            }
        } catch (err) {
            setError('An error occurred. Please try again.');
            setArtworks([]); 
        }
    };

    return (
        <div style={{ margin: '20px', textAlign: 'center' }}>
            <input
                type="text"
                placeholder="Search artworks..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                style={{ padding: '10px', width: '300px' }}
            />
            <button onClick={handleSearch} style={{ padding: '10px', marginLeft: '10px' }}>
                Search
            </button>

            {error && <p style={{ color: 'red', marginTop: '20px' }}>{error}</p>}

            <div style={{ marginTop: '20px' }}>
                {artworks.map((artwork, index) => (
                    <div
                        key={index}
                        style={{
                            margin: '10px auto',
                            border: '1px solid #ccc',
                            padding: '10px',
                            width: '400px',
                            textAlign: 'left',
                        }}
                    >
                        <h3>{artwork.title || 'Untitled'}</h3>
                        <p>
                            {artwork.people
                                ? `Artist: ${artwork.people.map((p) => p.name).join(', ')}`
                                : 'Unknown artist'}
                        </p>
                        {artwork.primaryimageurl && (
                            <img
                                src={artwork.primaryimageurl}
                                alt={artwork.title || 'Artwork'}
                                style={{ width: '100%', height: 'auto' }}
                            />
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};








//     return (
//         <div style={{ margin: '20px', textAlign: 'center' }}>
//             <input
//                 type="text"
//                 placeholder="Search artworks..."
//                 value={query}
//                 onChange={(e) => setQuery(e.target.value)}
//                 style={{ padding: '10px', width: '300px' }}
//             />
//             <button onClick={handleSearch} style={{ padding: '10px', marginLeft: '10px' }}>
//                 Search
//             </button>
//         </div>
//     );
// };

export default SearchBar;
