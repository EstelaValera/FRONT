import React, { useState, useEffect } from 'react'
import api from '../services/api'

const Artworks = () => {
    const [artworks, setArtworks] = useState([])


useEffect(() => {
    const fetchArtworks = async () => {
        try {
            const response = await api.get('/artworks')
            sethArtworks(response.data) 
        } catch (error) {
            console.error('Error fetching artworks;', error)
        }
    };

    fetchArtworks();
}, []);

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