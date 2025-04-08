import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function AutoPlay() {
    const settings = {
        dots: false, // Disable dots
        infinite: true,
        slidesToShow: 1, // Show 1 slide at a time
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        variableWidth: true, // Allows each slide to have variable width
    };

    return (
        <div className="w-full mx-auto py-10">
            <Slider {...settings}>
                {/* Slide 1 */}
                <div className="flex justify-center items-center p-5 h-20 bg-blue-500 rounded-lg text-white">
                    <div className="whitespace-nowrap text-lg font-normal text-center leading-relaxed">
                        I'm a passionate Frontend Developer with a strong understanding of modern web technologies.
                        I specialize in building responsive and interactive web applications.
                    </div>
                </div>

                {/* Slide 2 */}
                <div className="flex justify-center items-center p-5 h-20 bg-blue-500 rounded-lg text-white">
                    <div className="whitespace-nowrap text-lg font-normal text-center leading-relaxed">
                        Proficient in HTML, CSS, and JavaScript, I bring pixel-perfect designs to life.
                        I strive to create user-friendly interfaces with a focus on performance and scalability.
                    </div>
                </div>

                {/* Slide 3 */}
                <div className="flex justify-center items-center p-5 h-20 bg-blue-500 rounded-lg text-white">
                    <div className="whitespace-nowrap text-lg font-normal text-center leading-relaxed">
                        Experienced with popular frontend frameworks such as React and Vue.js.
                        I leverage component-based architecture to create reusable and maintainable code.
                    </div>
                </div>

                {/* Slide 4 */}
                <div className="flex justify-center items-center p-5 h-20 bg-blue-500 rounded-lg text-white">
                    <div className="whitespace-nowrap text-lg font-normal text-center leading-relaxed">
                        Familiar with state management libraries like Redux, React Context, and Vuex to manage the application state
                        efficiently in complex applications.
                    </div>
                </div>

                {/* Slide 5 */}
                <div className="flex justify-center items-center p-5 h-20 bg-blue-500 rounded-lg text-white">
                    <div className="whitespace-nowrap text-lg font-normal text-center leading-relaxed">
                        Skilled in creating responsive web designs using CSS frameworks like Tailwind CSS, Bootstrap, and custom media queries.
                        Ensuring great user experiences across different devices.
                    </div>
                </div>


            </Slider>
        </div>
    );
}

export default AutoPlay;
