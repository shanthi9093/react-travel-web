import React from "react";
import hotelsCSS from './../Hotels/Hotels.module.css'
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'

import { Autoplay } from "swiper/modules";

import img1 from './../../assets/Recomended1.png'
import img2 from './../../assets/Recomended2.png'
import img3 from './../../assets/Recomended3.png'
import img4 from './../../assets/Recomended4.png'
import img5 from './../../assets/Recomended5.png'
import img6 from './../../assets/Recomended6.png'

function Hotels () {
    return (
        <div className={`${hotelsCSS.HotelsWrapper} section`}id="recomended">
             <div className="Section_heading">
                <div>
                    <h2>Recommended Hotels</h2>
                
                </div>
                <button><small>View All Hotels</small> <i className="ri-arrow-right-up-line"></i></button>

            </div>
            <Swiper
  slidesPerView={3}
  spaceBetween={30}
  autoplay={{
    delay: 2500,
    disableOnInteraction: false,
  }}
  loop={true}
  modules={[Autoplay]}
  className={hotelsCSS.swiper}
>

                <SwiperSlide>
                    <div className={hotelsCSS.card}>
                      <div className={hotelsCSS.imgWrapper}>
                        <img src={img1} alt="" />
                      </div>
                     <h3>A Mountclam At Brewery</h3>
                     <h3>London City</h3>

                     <small>Lorem ipsum dolor sit amet.</small>
                     <p><span>4.7</span>Exceptional 3024 Rating</p>
                     <h4>Starting From <span>$1200</span></h4>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className={hotelsCSS.card}>
                      <div className={hotelsCSS.imgWrapper}>
                        <img src={img2} alt="" />
                      </div>
                    <h3>Staycity Aparthotels Depford</h3>
                    <h3> Bridge Station</h3>
                    <small>Lorem ipsum dolor sit amet.</small>
                    <p><span>4.7</span>Exceptional 3024 Rating</p>
                    <h4>Starting From <span>$1200</span></h4>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className={hotelsCSS.card}>
                      <div className={hotelsCSS.imgWrapper}>
                        <img src={img3} alt="" />
                      </div>
                    <h3>The Wsetin New York Times</h3>
                    <h3>Square West</h3>

                    <small>Lorem ipsum dolor sit amet.</small>
                    <p><span>4.7</span>Exceptional 3024 Rating</p>
                    <h4>Starting From <span>$1200</span></h4>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className={hotelsCSS.card}>
                      <div className={hotelsCSS.imgWrapper}>
                        <img src={img4} alt="" />
                      </div>
                    <h3>Double by Hitnam Hotel</h3>
                    <h3>New York Times</h3>

                    <small>Lorem ipsum dolor sit amet.</small>
                    <p><span>4.7</span>Exceptional 3024 Rating</p>
                    <h4>Starting From <span>$1200</span></h4>
                    </div>
                </SwiperSlide>

                 <SwiperSlide>
                    <div className={hotelsCSS.card}>
                      <div className={hotelsCSS.imgWrapper}>
                        <img src={img5} alt="" />
                      </div>
                    <h3>Double by Times Square</h3>
                    <h3>London City</h3>

                    <small>Lorem ipsum dolor sit amet.</small>
                    <p><span>4.7</span>Exceptional 3024 Rating</p>
                    <h4>Starting From <span>$1200</span></h4>
                    </div>
                </SwiperSlide>

                 <SwiperSlide>
                    <div className={hotelsCSS.card}>
                      <div className={hotelsCSS.imgWrapper}>
                        <img src={img6} alt="" />
                      </div>
                    <h3>Stycity Times </h3>
                    <h3>New York</h3>

                    <small>Lorem ipsum dolor sit amet.</small>
                    <p><span>4.7</span>Exceptional 3024 Rating</p>
                    <h4>Starting From <span>$1200</span></h4>
                    </div>
                </SwiperSlide>


            </Swiper>

        </div>
    )

}
export default Hotels