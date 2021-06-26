import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
//stlyed


function Today({ data }) {
    console.log(data);

    return (
        <Swiper
            loop='true'
            breakpoints={myBreakpoint}
            className="my-swiper">
            {
                data.hour?.map((item, index) => {
                    return (
                        <SwiperSlide key={index} className="slide" style={slideStytled}>
                            <h4>{index}:00</h4>
                            <div><img src={item.condition.icon} alt="" /></div>
                            <p>{item.condition.text}</p>
                            <p>{item.temp_c}</p>
                            <p>Chance of rain: {item.chance_of_rain}%</p>
                        </SwiperSlide>
                    )
                })
            }
        </Swiper>

    );
}

const slideStytled = {
    height: '100%',
    fontSize: '80%',
    textAlign: 'center',
    lineHeight: '220%'
}
const myBreakpoint = {
    "300": {
        "slidesPerView": 2,
        "spaceBetween": 5
    },
    "640": {
        "slidesPerView": 3,
        "spaceBetween": 10
    },
    "768": {
        "slidesPerView": 4,
        "spaceBetween": 20
    },
    "1024": {
        "slidesPerView": 5,
        "spaceBetween": 40
    }
}


export default Today;
