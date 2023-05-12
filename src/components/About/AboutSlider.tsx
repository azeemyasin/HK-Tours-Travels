import React from "react";
import Slider from "react-slick";

const AboutSlider: React.FC = () => {
  const settings = {
    dots: false,
    Infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="overflow-x-hidden">
        <Slider {...settings}>
          <div className="w-full h-72">
            <img src="/images/about/img-1.jpg" alt="" className="w-full" />
          </div>
          <div className="w-full h-72">
            <img src="/images/about/img-2.jpg" alt="" className="w-full" />
          </div>
          <div className="w-full h-72">
            <img src="/images/about/img-3.jpg" alt="" className="w-full" />
          </div>
          <div className="w-full h-72">
            <img src="/images/about/img-1.jpg" alt="" className="w-full" />
          </div>
          <div className="w-full h-72">
            <img src="/images/about/img-2.jpg" alt="" className="w-full" />
          </div>
          <div className="w-full h-72">
            <img src="/images/about/img-3.jpg" alt="" className="w-full" />
          </div>
        </Slider>
      </div>
    </>
  );
};

export default AboutSlider;
