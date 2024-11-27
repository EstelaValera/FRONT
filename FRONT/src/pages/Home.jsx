import React, { useState } from 'react';
import SearchBar from '../components/SearchBar';
import ArtworkList from '../components/ArtworkList';
import api from '../services/api'; 

const Home = () => {
    const [artworks, setArtworks] = useState([]);
    const [error, setError] = useState(null);

    const fetchArtworks = async (query) => {
        try {
            setError(null);
            const response = await api.get(`/artworks/title/${query}`);
            setArtworks(response.data);
        } catch (err) {
            setError('No artworks found or an error occurred.');
            setArtworks([]);
        }
    };

    return (
        <div>
            <h1 style={{ textAlign: 'center' }}>Art Explorer</h1>
            <SearchBar onSearch={fetchArtworks} />
            {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}
            <ArtworkList artworks={artworks} />
        </div>
    );
};

export default Home;
