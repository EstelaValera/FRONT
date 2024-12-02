import React from 'react';

const ArtworkList = ({ artworks }) => {
    if (artworks.length === 0) {
        return <p>No artworks found with images.</p>;
    }

    return (
        <div className="artwork-list">
            {artworks.map((artwork) => (
                <div className="artwork-card" key={artwork.id} >
                    <h3>{artwork.title}</h3>
                    <p><strong>Artist:</strong> {artwork.people && artwork.people[0] ? artwork.people[0].name : 'Unknown artist'}</p>
                    {artwork.dated && <p><strong>Date:</strong> {artwork.dated}</p>}
                    {artwork.primaryimageurl ? (
                        <img
                            src={artwork.primaryimageurl}
                            alt={artwork.title}
                        />
                    ) : (
                        <img
                            src="/placeholder-image.jpg"
                            alt="No available image"
                        />
                    )}
                    <a href={`https://harvardartmuseums.org/collections/object/${artwork.id}`} target="_blank" rel="noopener noreferrer">View More Details</a>
                </div>
            ))}
        </div>
    );
};

export default ArtworkList;


// import React from 'react';
// import ArtworkCard from './ArtworkCard';

// const ArtworkList = ({ artworks }) => {
//     return (
//         <div>
//             {artworks.map((artwork) => (
//                 <ArtworkCard key={artwork.id} artwork={artwork} />
//             ))}
//         </div>
//     );
// };

// export default ArtworkList;

