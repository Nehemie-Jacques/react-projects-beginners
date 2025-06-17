import React, { useState } from "react";
import "./index.css";

function Testimonial() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const testimonials = [
        {
            name: "John Doe",
            quote: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.",
        },
        {
            name: "John Smith",
            quote: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.",
        },
        {
            name: "John Lee",
            quote: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.",
        },
    ];

    const handlePrevClick = () => {
        setCurrentIndex((currentIndex + testimonials.length - 1) % testimonials.length)
    }

    const handleNextclick = () => {
        setCurrentIndex((currentIndex + 1) % testimonials.length)
    }

    return (
        <div className="testimonials">
            <div className="testimonials-quote">
                {testimonials[currentIndex].quote}
            </div>
            <div className="testimonials-author">
                - {testimonials[currentIndex].name}
            </div>
            <div className="testimonials-nav">
                <button onClick={handlePrevClick}>Next</button>
                <button onClick={handleNextclick}>Prev</button>
            </div>
        </div>
    )
}

export default Testimonial;