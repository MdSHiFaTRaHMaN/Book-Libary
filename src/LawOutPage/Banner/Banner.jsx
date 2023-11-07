import { useState, useEffect } from 'react';

const Banner = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slides = [
        'https://i.ibb.co/1ZQcL7g/Screenshot-2023-11-08-033652.png',
        'https://i.ibb.co/R0vsXGr/Screenshot-2023-11-08-034345.png',
        'https://i.ibb.co/hMZNKT9/Screenshot-2023-11-08-033539.png',
    ];

    const nextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide === slides.length - 1 ? 0 : prevSlide + 1));
    };

    const prevSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide === 0 ? slides.length - 1 : prevSlide - 1));
    };

    useEffect(() => {
        const autoChange = setInterval(nextSlide, 3000);
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
