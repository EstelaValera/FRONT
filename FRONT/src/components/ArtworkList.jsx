import React from 'react';
import Slider from "react-slick";

const CustomNextArrow = ({ onClick }) => {
    return (
        <div
            className="custom-arrow custom-next"
            onMouseEnter={onClick}
            style={{
                cursor: "pointer",
                fontSize: "50px",  
                display: "inline-block",
            }}
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#370617" 
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <path d="M9 18l6-6-6-6"></path>
            </svg>
        </div>
    );
};

const CustomPrevArrow = ({ onClick }) => {
    return (
        <div
    className="custom-arrow custom-prev"
    onMouseEnter={onClick} 
    style={{
        cursor: "pointer",
        fontSize: "50px", 
        display: "inline-block",
    }}
>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="50"
        height="50"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#370617" 
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <path d="M15 18l-6-6 6-6"></path> 
    </svg>
</div>
    );
};

    const ArtworkList = ({ artworks }) => {
    if (artworks.length === 0) {
        return ;
    }

    const settings = {
        dots: true,
        infinite: true,
        speed: 1300, 
        slidesToShow: 3, 
        slidesToScroll: 3,
        arrows: true,
        nextArrow: <CustomNextArrow />,
        prevArrow: <CustomPrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };

    return (
        <div className="artwork-list">
            <Slider {...settings}>
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


