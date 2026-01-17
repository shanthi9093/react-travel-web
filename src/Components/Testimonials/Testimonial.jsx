import React from "react";
import Testimonialcss from "./../Testimonials/Testimonial.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

 import user1 from "./../../assets/User1.png";
 import user2 from "./../../assets/User2.png";
 import user3 from "./../../assets/User3.png";
 import user4 from "./../../assets/User4.png";
function Testimonial () {
    return(
        <div className={`${Testimonialcss.TestimonialWrapper} section`}id="testimonials">
            <div className={Testimonialcss.content}>
                <h2>What our client say ?</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, qui!</p>
                 <div className={Testimonialcss.Rating}>
                    <div>
                        <h3>  13+ <span>Happy Clients</span></h3>
                    </div>
                    <div>
                        <h3> 4.8+ <span> Overall Rating</span></h3>
                    </div>
                 </div>
            </div>
            <Swiper className={Testimonialcss.swiper}
            loop={true}
            modules={[Autoplay]}
            autoplay={{
                delay: 2500,
            }}
            >
                <SwiperSlide>
                    <div className={Testimonialcss.Testimonial}>
                        <div className={Testimonialcss.profile}>
                            <img src={user1} alt="" />
                            <h3>John Doe <span>ABC.SEO</span></h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur numquam officia neque sequi illo reiciendis enim excepturi? Fuga, quo temporibus!</p>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className={Testimonialcss.Testimonial}>
                        <div className={Testimonialcss.profile}>
                            <img src={user2} alt="" />
                            <h3>Michel Mark<span>HR Dept.</span></h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur numquam officia neque sequi illo reiciendis enim excepturi? Fuga, quo temporibus!</p>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className={Testimonialcss.Testimonial}>
                        <div className={Testimonialcss.profile}>
                            <img src={user3} alt="" />
                            <h3>Jonathan Dev <span>XYZ Project Head</span></h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur numquam officia neque sequi illo reiciendis enim excepturi? Fuga, quo temporibus!</p>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className={Testimonialcss.Testimonial}>
                        <div className={Testimonialcss.profile}>
                            <img src={user4} alt="" />
                            <h3>Mark Doe<span>Team Lead</span></h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur numquam officia neque sequi illo reiciendis enim excepturi? Fuga, quo temporibus!</p>
                    </div>
                </SwiperSlide>
            </Swiper>


        </div>
    )
}
export default Testimonial