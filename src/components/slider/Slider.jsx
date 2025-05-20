import React from "react";
import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";
import Banner from "../Banner/banner";
import SecondSlider from "../AllSlider/SecondSlider";
import ThirdSlider from "../AllSlider/ThirdSlider";

const Slider = () => {
  return (
    <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
      <SwiperSlide>
        <Banner></Banner>
      </SwiperSlide>
      <SwiperSlide>
        <SecondSlider></SecondSlider>
      </SwiperSlide>
      <SwiperSlide>
        <ThirdSlider></ThirdSlider>
      </SwiperSlide>
    </Swiper>
  );
};

export default Slider;
