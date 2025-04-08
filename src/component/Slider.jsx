import React from "react";
import Slider from "react-slick";

function AutoPlay() {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 3000,
        autoplaySpeed: 2000,
        cssEase: "linear"
    };
    return (
        <div className="slider-container ">
            <Slider {...settings}>
                <div>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWJ1gjg9S7DPZY-bcRMbC_KtrTgarBJ4l31A&s" alt="" className="h-21" />
                </div>
                <div>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdOiO42oAtU-QUUT-BuBa0nqRSS-DwRMuFuw&s" alt="" className="h-21" />
                </div>
                <div>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdlIh1SVwZbOKBDnbcD4mALmbhXxtxtEj2aA&s" alt="" className="h-21" />
                </div>
                <div>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTf-GxQfqSeimOyyXiEK4ml23fsIm3dibB8fQ&s" alt="" className="h-21" />
                </div>
                <div>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTW9XEoHO_QUJ3iY0TqkSx88sIHCSyQaQJkEA&s" alt="" className="h-21" />
                </div>
                <div>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeyiCksOlMnVt7Whi2XmAaWSoqsGzHwkFBtQ&s" alt="" className="h-21" />
                </div>
            </Slider>
        </div>
    );
}

export default AutoPlay;
