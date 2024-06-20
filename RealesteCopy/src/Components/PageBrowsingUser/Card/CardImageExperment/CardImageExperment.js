"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./styles.css";
// import required modules
import { Navigation, Pagination } from "swiper/modules";

function CardImageExperment({ items }) {
  return (
    <div>
      <>
        <Swiper
          pagination={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          {items.imageUrl.map((item, index) => {
            return (
              <SwiperSlide className="swiper-slide" key={index}>
                <img src={item.src} alt="image" />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </>
    </div>
  );
}

export default CardImageExperment;
