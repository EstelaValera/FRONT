import React, { useState, useEffect } from "react";
import api from "../services/api";

const ArtworkList = () => {
    const [artworks, setArtworks] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchArtworks = async () => {
            try {
                const response = await api.get('/artworks'); 
        setArtworks(response.data); 
        } catch (err) {
        setError(err.message);
        } finally {
        setLoading(false);
        }
    }

    fetchArtworks();
    }, []);

    if (loading) return <p>Loading artworks...</p>;
    if (error) return <p>Error: {error}</p>;
    return (
        <div>
            <h1>Artworks</h1>
            <ul>
                {artworks.map((artwork) => (
                <li key={artwork.id}>
                    <h2>{artwork.title}</h2>
                    <p>{artwork.artist}</p>
                    <img src={artwork.image} alt={artwork.title} width="200" />
                </li>
                ))}
            </ul>
            </div>
        );

    };

export default ArtworkList;
