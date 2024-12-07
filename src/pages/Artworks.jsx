import React, { useState, useEffect } from 'react'
import api from '../services/api'

const Artworks = () => {
    const [artworks, setArtworks] = useState([])


    useEffect(() => {
        const fetchArtworks = async () => {
            try {
                const response = await api.get('/artworks');
                setArtworks(response.data);
            } catch (error) {
                console.error('Error fetching artworks:', error);
            }
        };
    
        if (filters.general || filters.person || filters.title || filters.period) {
            fetchArtworks();
        }
    }, [filters]);

return (
    <div>
        <h1>Artworks</h1>
        <ul>
            {artworks.map((artwork) => (
                <li key={artwork.id}>{artwork.title}</li>
            ))}
        </ul>
    </div>
    )
};

export default Artworks;