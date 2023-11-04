

const Banner = () => {
    return (
        <div className="w-10/12 mx-auto">
            <div className="carousel w-full rounded-xl h-[300px] lg:h-[560px] mt-6">
                    <div id="slide1" className="carousel-item relative w-full">
                        <img src='https://i.ibb.co/nstVqMX/Screenshot-2023-11-05-021451.png' className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a> 
                        <a href="#slide2" className="btn btn-circle">❯</a>
                        </div>
                    </div> 
                    <div id="slide2" className="carousel-item relative w-full">
                        <img src='https://i.ibb.co/zZddSGJ/Screenshot-2023-11-05-021517.png' className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a> 
                        <a href="#slide3" className="btn btn-circle">❯</a>
                        </div>
                    </div> 
                    <div id="slide3" className="carousel-item relative w-full">
                        <img src='https://i.ibb.co/G2PsZ4x/Screenshot-2023-11-05-021605.png' className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a> 
                        <a href="#slide1" className="btn btn-circle">❯</a>
                        </div>
                    </div> 
                    </div>
        </div>
    );
};

export default Banner;