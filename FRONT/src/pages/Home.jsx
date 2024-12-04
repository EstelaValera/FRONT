import React, { useState, useEffect } from 'react';
import SearchBar from '../components/SearchBar';
import ArtworkList from '../components/ArtworkList';
import api from '../services/api';
import debounce from 'lodash.debounce';
import '../styles/App.css';

const Home = () => {
    const [artworks, setArtworks] = useState([]);
    const [error, setError] = useState(null);
    const [filters, setFilters] = useState({
        general: '',
        person: '',
        title: '',
        period: '',
    });

    const updateFilter = (field, value) => {
        setFilters((prevFilters) => ({
            ...prevFilters,
            [field]: value,
        }));
        if (value.trim() === '')
            setArtworks([])
    };

    const fetchArtworks = async () => {
        try {
            setError(null);
            const params = {};
            if (filters.general) params.query = filters.general;
            if (filters.person) params.person = filters.person;
            if (filters.title) params.title = filters.title;

            if (Object.keys(params).length === 0) return;

            const queryString = new URLSearchParams(params).toString();
            const response = await api.get(`/artworks/search?${queryString}`);
            const artworksWithImages = response.data.filter(artwork => artwork.primaryimageurl);
            setArtworks(artworksWithImages);
        } catch (err) {
            setError('No artworks found or an error occurred.');
            setArtworks([]);
        }
    };

    const debouncedFetchArtworks = debounce(fetchArtworks, 500); 

    useEffect(() => {
        debouncedFetchArtworks(); 

        return () => {
            debouncedFetchArtworks.cancel();
        };
    }, [filters]); 

    return (
        <div className="page-container">
            <h1 className="header-text">
                <div className="line1">Welcome to</div>
                <div className="line2">Art Explorer</div>
            </h1>

            <div className='search-bar-container'>
            <SearchBar
                placeholder="Search General Query"
                onSearch={(value) => updateFilter('general', value)}
            />
            <SearchBar
                placeholder="Search by Artist"
                onSearch={(value) => updateFilter('person', value)}
            />
            <SearchBar
                placeholder="Search by Title"
                onSearch={(value) => updateFilter('title', value)}
            />
            </div>
            <ArtworkList artworks={artworks} />
        </div>
    ); 
};

export default Home;
