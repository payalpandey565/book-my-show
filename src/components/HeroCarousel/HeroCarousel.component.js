import React from "react";
import HeroSlider from "react-slick";

import {NextArrow,PrevArrow} from "./Arrow.component";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HeroCarousel=() => {
  const settingsLg ={
    arrows:true,
    autoplay:true,
    autoplaySpeed: 1000,
    centerMode:true,
    slidesToShow:1,
    slidesToScroll:1,
    centerPadding:"300px",
    infinite:true,
    nextArrow: <NextArrow/>,
    prevArrow:<PrevArrow/>
  }
  const settings={
    arrows:true,
    dots: true,
   infinite: true,
   slidesToShow: 1,
   slidesToScroll: 1,
   nextArrow: <NextArrow/>,
   prevArrow:<PrevArrow/>

 };
 const images=[
   "https://www.bollywoodhungama.com/wp-content/uploads/2020/08/WhatsApp-Image-2023-06-15-at-1.28.59-PM.jpeg",
    "https://infoexchange.live/uploads/2/2023-06/zara_hatke_zara_bachke_2.jpg",
    "https://assets-in.bmscdn.com/discovery-catalog/events/et00358477-ybxecbeauu-landscape.jpg",
    "https://fullmoonhotel.com.au/wp-content/uploads/2021/11/Friday-Night-Fever-landscape-nightlife-hd-1170x658-1.jpeg",
    "https://assets-in.bmscdn.com/nmcms/events/banner/mobile/media-mobile-wild-comedy-nights-at-koramangala-0-2023-6-2-t-8-12-24.jpg"

 ]

 return(
   <>
   <div className="lg:hidden">
   <HeroSlider {...settings}>
   {
     images.map((image) => (
       <div className="w-full h-64 md:80 py-3">
       <img src={image} alt="testing" className="w-full h-full rounded-md"/>
       </div>
    ))
   }

</HeroSlider>


   </div>

   <div className="hidden lg:block">
   <HeroSlider {...settingsLg}>
   {
     images.map((image) => (
       <div className="w-full h-96 px-2 py-3">
       <img src={image} alt="testing" className="w-full h-full rounded-md"/>
       </div>
    ))
   }

</HeroSlider>


   </div>


   </>
 );
};

export default HeroCarousel;
