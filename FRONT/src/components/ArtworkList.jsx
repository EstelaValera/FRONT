import React from 'react';
import ArtworkCard from './ArtworkCard';

const ArtworkList = ({ artworks }) => {
    return (
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
            {artworks.map((artwork) => (
                <ArtworkCard key={artwork.id} artwork={artwork} />
            ))}
        </div>
    );
};

export default ArtworkList;
