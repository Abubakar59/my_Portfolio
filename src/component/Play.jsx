import React from "react";
import Slider from "react-slick";
import { baseUrl } from "./";  // Make sure the path is correct

function Fade() {
    const settings = {
        dots: true,
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        waitForAnimate: false
    };

    return (
        <div className="slider-container">
            <Slider {...settings}>
                <div>
                    <img src={baseUrl + "/abstract01.jpg"} alt="Abstract 1" />
                </div>
                <div>
                    <img src={baseUrl + "/abstract02.jpg"} alt="Abstract 2" />
                </div>
                <div>
                    <img src={baseUrl + "/abstract03.jpg"} alt="Abstract 3" />
                </div>
                <div>
                    <img src={baseUrl + "/abstract04.jpg"} alt="Abstract 4" />
                </div>
            </Slider>
        </div>
    );
}

export default Fade;
