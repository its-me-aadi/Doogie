import React from "react";
import { Swiper ,SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import "../styles/review.css";
import JinWoo from "../assets/Profile Pics/JinWoo.jpg"
import Nezuko from "../assets/Profile Pics/nezuko2.jpeg"
import Asta from "../assets/Profile Pics/Asta.jpeg"
import Goku from "../assets/Profile Pics/goku.jpeg"
import Dog1 from "../assets/Profile Pics/dog1.jpg"
import Dog2 from "../assets/Profile Pics/dog2.jpg"
import Kakashi from "../assets/Profile Pics/kakashi.jpeg"
import AoiSan from "../assets/Profile Pics/aoi.jpeg"
import ReviewData from "../reviews.json"

function Review() {
    const profilePics=[JinWoo,AoiSan,Asta,Goku,Dog1,Dog2,Kakashi,Nezuko]

    return (
        <React.Fragment>
            <div className="rvw-main-div">
                <div className="rvw-head">
                    <p style={{color:"#00bc8c"}}>Doogie Reviews</p>
                    <hr className="rvw-hr" />
                </div>
                <div className="rvw-carousel-div">
                    <div className="container">
                        <Swiper
                            effect={'coverflow'}
                            grabCursor={true}
                            centeredSlides={true}
                            loop={true}
                            slidesPerView={'auto'}
                            coverflowEffect={{
                                rotate: 0,
                                stretch: 0,
                                depth: 100,
                                modifier: 2.5,
                            }}
                            pagination={{ el: '.swiper-pagination', clickable: true }}
                            navigation={{
                                nextEl: '.swiper-button-next',
                                prevEl: '.swiper-button-prev',
                                clickable: true,
                            }}
                            modules={[EffectCoverflow, Pagination, Navigation]}
                            className="swiper_container"
                        >
                            {ReviewData.map(rvw => {
                                return (
                                    <SwiperSlide>
                                        <div className="rvw-card">
                                            <div className='rvw-card-top'>
                                                <img className='rvw-card-user-img' src={profilePics[rvw.dp]} alt='user-img' />
                                                <p className='rvw-card-top-head'>
                                                    {rvw.name}
                                                </p>
                                            </div>
                                            <div className='rvw-card-text'>
                                                <p>
                                                    {rvw.review}
                                                </p>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                )
                            })}
                            <div className="slider-controler">
                                <div className="swiper-button-prev slider-arrow" >
                                    <i class="fa-solid fa-arrow-left fa-2xl" style={{ "color": "#000000"}}></i>
                                </div>
                                <div className="swiper-button-next slider-arrow">
                                    <i class="fa-solid fa-arrow-right fa-2xl" style={{ "color": "#000000"}}></i>
                                </div>
                                <div className="swiper-pagination"></div>  
                            </div>
                        </Swiper>
                    </div>
                </div>

            </div>
        </React.Fragment>
    )
}

export default Review