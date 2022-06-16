import React, { useRef } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";

// Required swiper css
import "swiper/css";
import "swiper/css/pagination";

// Import custom classes
import classes from "./style/index.module.scss";

const Slider: React.FC = () => {
  return (
    <div className={classes.container}>
      <Swiper
        slidesPerView={1}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop
        draggable={false}
        modules={[Autoplay, Pagination]}
        pagination={{
          el: "#dotContainer",
          bulletActiveClass: classes.active_bullet,
          bulletClass: classes.bullet,
        }}
      >
        <SwiperSlide className={classes.slider}>
          <img src="/assets/1.png" style={{ width: "90vw" }} />
        </SwiperSlide>
        <SwiperSlide className={classes.slider}>
          <img src="/assets/1.png" style={{ width: "90vw" }} />
        </SwiperSlide>
        <SwiperSlide className={classes.slider}>
          <img src="/assets/1.png" style={{ width: "90vw" }} />
        </SwiperSlide>
        <SwiperSlide className={classes.slider}>
          <img src="/assets/1.png" style={{ width: "90vw" }} />
        </SwiperSlide>
        <SwiperSlide className={classes.slider}>
          <img src="/assets/1.png" style={{ width: "90vw" }} />
        </SwiperSlide>
        <SwiperSlide className={classes.slider}>
          <img src="/assets/1.png" style={{ width: "90vw" }} />
        </SwiperSlide>
        <SwiperSlide className={classes.slider}>
          <img src="/assets/1.png" style={{ width: "90vw" }} />
        </SwiperSlide>
      </Swiper>
      <div id="dotContainer" className={classes.dott_container}></div>
    </div>
  );
};

export default Slider;
