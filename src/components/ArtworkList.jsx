import React from 'react';
import Slider from "react-slick";


    const ArtworkList = ({ artworks }) => {
    if (artworks.length === 0) {
        return null;
    }

    const settings = {
        dots: true,
        infinite: true,
        speed: 1300,
        slidesToShow: 4,
        slidesToScroll: 4,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <div className="artwork-list">
            <Slider {...settings} className='custom-slider' >
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
            </Slider>
        </div>
    );
};

export default ArtworkList;


