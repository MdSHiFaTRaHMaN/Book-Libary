import React, { useState, useEffect } from 'react';

const Banner = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slides = [
        'https://i.ibb.co/nstVqMX/Screenshot-2023-11-05-021451.png',
        'https://i.ibb.co/zZddSGJ/Screenshot-2023-11-05-021517.png',
        'https://i.ibb.co/G2PsZ4x/Screenshot-2023-11-05-021605.png',
    ];

    const nextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide === slides.length - 1 ? 0 : prevSlide + 1));
    };

    const prevSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide === 0 ? slides.length - 1 : prevSlide - 1));
    };

    useEffect(() => {
        const autoChange = setInterval(nextSlide, 3000); // Change image every 3 seconds
        return () => {
            clearInterval(autoChange);
        };
    }, []);

    return (
        <div className="w-10/12 mx-auto">
            <div className="carousel w-full rounded-xl h-[300px] lg:h-[560px] mt-6">
                <div className="carousel-item relative w-full">
                    <img src={slides[currentSlide]} alt={`Slide ${currentSlide + 1}`} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" onClick={prevSlide} className="btn btn-circle">
                            ❮
                        </a>
                        <a href="#slide2" onClick={nextSlide} className="btn btn-circle">
                            ❯
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
