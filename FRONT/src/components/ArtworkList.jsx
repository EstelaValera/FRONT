import React from 'react';
import ArtworkCard from './ArtworkCard';

const ArtworkList = ({ artworks }) => {
    return (
        <div>
            {artworks.map((artwork) => (
                <ArtworkCard key={artwork.id} artwork={artwork} />
            ))}
        </div>
    );
};

export default ArtworkList;

