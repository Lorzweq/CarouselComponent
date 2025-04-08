import React, { useState } from "react";
import "../styles/Carousel.css"; // Add custom styles here


// Using TailwindCSS for styling
// Install tailwind or remove tailwind classes if not using it
const Carousel = ({ items }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    };

    const calculatePosition = (index) => {
        const totalPositions = items.length;
    
        // Calculate shortest distance
        let distance = (index - currentIndex + totalPositions) % totalPositions;
    
        // If the reverse direction is shorter, move in that direction
        if (distance > totalPositions / 2) {
            distance -= totalPositions;
        }
    
        return distance;
    };
    
    

    return (
        <div className="carousel-container ">
            <button className="carousel-button prev" onClick={handlePrev}>
                &#8249;
            </button>
            <div className="carousel">
            {items.map((item, index) => {
                const position = calculatePosition(index);
                const rotationY = position * 45; // Adjust for smooth rotation

               return (
                    <div
                        key={index}
                        className="carousel-card"
                        style={{
                            transform: `rotateY(${rotationY}deg) translateZ(300px)`,
                            opacity: 1 - Math.abs(position) * 0.2, // Reduce opacity for depth effect
                            zIndex: items.length - Math.abs(position),
                        }}
                    >
                        <img
                            src={item}
                            alt={`Carousel item ${index + 1}`}
                            className="carousel-image"
                            style={{ width: "100%", height: "auto" }}
                        />
                    </div>
                );
            })}

            </div>
            {/* Here remove bg-blue-500 if not using tailwind */}
            <button className="carousel-button next bg-blue-500" onClick={handleNext}>
                &#8250;
            </button>
        </div>
    );
};

export default Carousel;
