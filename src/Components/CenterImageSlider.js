import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import dashboardimg from "../images/dashboardimg.png";
import dashboardimg2 from "../images/dashboardimg2.png";
import dashboardimg3 from "../images/dashboardimg3.png";

const imageslider = [
  { image: dashboardimg },
  { image: dashboardimg2 },
  { image: dashboardimg3 },
];

const CenterImageSlider = () => {
  const sliderRef = useRef();

  const settings = {
    arrows: false,
    dots: true,
    fade: true,
    autoplay: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [],
  };
  return (
    <div className="center-img-slider">
      <Slider ref={sliderRef} {...settings}>
        {imageslider.map((imageslider, index) => (
          <div
            key={index}
            className="cursor-pointer overflow-hidden !flex"
          >
            <img
              src={imageslider.image}
              alt="img"
              className="w-full h-full sm:rounded-[7px]"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CenterImageSlider;
