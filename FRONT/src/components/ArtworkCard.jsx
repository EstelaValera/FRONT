import React from 'react';

const ArtworkCard = ({ artwork }) => {
    return (
        <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px', borderRadius: '5px' }}>
            <h3>{artwork.title}</h3>
            <p><strong>Artist:</strong> {artwork.people && artwork.people[0] ? artwork.people[0].name : 'Unknown artist'}</p>
            {artwork.dated && <p><strong>Date:</strong> {artwork.dated}</p>}
            {artwork.description && <p><strong>Description:</strong> {artwork.description}</p>}
            {artwork.primaryimageurl ? (
                <img 
                    src={artwork.primaryimageurl} 
                    alt={artwork.title} 
                    style={{ width: '100%', objectFit: 'cover', borderRadius: '5px' }} 
                />
            ) : (
                <img 
                    src="/placeholder-image.jpg" 
                    alt="No available image" 
                    style={{ width: '100%', objectFit: 'cover', borderRadius: '5px' }} 
                />
            )}
            {artwork.id ? (
            <a href={`https://harvardartmuseums.org/collections/object/${artwork.id}`} target="_blank" rel="noopener noreferrer">View More Details</a>
        ) : (
            <p>No additional details available</p>
        )}
        </div>
    );
};

export default ArtworkCard;
