import React, { useState, useEffect } from 'react';
import SearchBar from '../components/SearchBar';
import ArtworkList from '../components/ArtworkList';
import api from '../services/api';

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
    };

    useEffect(() => {
        const fetchArtworks = async () => {
            try {
                setError(null);

                const params = {};
                if (filters.general) params.query = filters.general;
                if (filters.person) params.person = filters.person;
                if (filters.title) params.title = filters.title;
                if (filters.period) params.period = filters.period;

                const queryString = new URLSearchParams(params).toString();
                const response = await api.get(`/artworks/search?${queryString}`);

                setArtworks(response.data);
            } catch (err) {
                setError('No artworks found or an error occurred.');
                setArtworks([]);
            }
        };

        fetchArtworks();
    }, [filters]);

    return (
        <div>
            <h1 style={{ textAlign: 'center' }}>Art Explorer</h1>

            <SearchBar
                placeholder="Search general query"
                onSearch={(value) => updateFilter('general', value)}
            />

            <SearchBar
                placeholder="Search by person"
                onSearch={(value) => updateFilter('person', value)}
            />

            <SearchBar
                placeholder="Search by title"
                onSearch={(value) => updateFilter('title', value)}
            />

            <SearchBar
                placeholder="Search by period"
                onSearch={(value) => updateFilter('period', value)}
            />

            <ArtworkList artworks={artworks} />
        </div>
    );
};

export default Home;
