import React from "react";
import "./testimonials.css";
import AVTR1 from "../../assets/avatar1.jpg";

import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

export default function Testimonials() {
  return (
    <>
      <section id="testimonials">
        <h4>Review from clients</h4>
        <h2>Testimonials</h2>

        <Swiper
          className="container testimonials__container"
          modules={[Pagination]}
          spaceBetween={40}
          slidesPerView={1}
          pagination={{ clickable: true }}
        >
          <SwiperSlide className="testimonial">
            <div className="client__avatar">
              <img src={AVTR1} alt="avatar" />
            </div>
            <h5 className="client__name">Ernest Achiever</h5>
            <small className="client__review">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum
              hic quos consequatur similique labore magni excepturi distinctio
              ducimus esse, voluptates a suscipit repellat in rem ex sit
              doloremque cumque non.
            </small>
          </SwiperSlide>
          <SwiperSlide className="testimonial">
            <div className="client__avatar">
              <img src={AVTR1} alt="avatar" />
            </div>
            <h5 className="client__name">Ernest Achiever</h5>
            <small className="client__review">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum
              hic quos consequatur similique labore magni excepturi distinctio
              ducimus esse, voluptates a suscipit repellat in rem ex sit
              doloremque cumque non.
            </small>
          </SwiperSlide>
          <SwiperSlide className="testimonial">
            <div className="client__avatar">
              <img src={AVTR1} alt="avatar" />
            </div>
            <h5 className="client__name">Ernest Achiever</h5>
            <small className="client__review">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum
              hic quos consequatur similique labore magni excepturi distinctio
              ducimus esse, voluptates a suscipit repellat in rem ex sit
              doloremque cumque non.
            </small>
          </SwiperSlide>
          <SwiperSlide className="testimonial">
            <div className="client__avatar">
              <img src={AVTR1} alt="avatar" />
            </div>
            <h5 className="client__name">Ernest Achiever</h5>
            <small className="client__review">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum
              hic quos consequatur similique labore magni excepturi distinctio
              ducimus esse, voluptates a suscipit repellat in rem ex sit
              doloremque cumque non.
            </small>
          </SwiperSlide>
        </Swiper>
      </section>
    </>
  );
}
