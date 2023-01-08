import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Slick = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  let arr = [1, 2, 3];
  return (
    <div className="lg:p-[2rem] p-0">
      <Slider {...settings}>
        {arr.map((item) => (
          <div key={item} className="w-full">
            <img
              className="w-full h-[10rem] lg:h-[25rem] object-contain"
              src="https://img.shop.com/Image/homepage/shop_usa_100106_eng_2022_holiday_end_of__season_sales_banners_and_social_media_assets_1600x300-img-min1671568635725.jpg"
              alt=""
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Slick;
