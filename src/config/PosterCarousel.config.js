const settings={
  infinite:true,
  autoplay:false,
  autoplaySpeed:2000,
  slidesToShow:5,
  slidesToScroll:2,
  InitialSlide:0,
  responsive: [
     {
       breakpoint: 1024,
       settings: {
         slidesToShow: 3,
         slidesToScroll: 3,
         infinite: true,
         dots: false
       }
     },
     {
       breakpoint: 600,
       settings: {
         slidesToShow: 2,
         slidesToScroll: 2,
         initialSlide: 2
       }
     },
     {
       breakpoint: 480,
       settings: {
         slidesToShow: 2,
         slidesToScroll: 1
       }
     }
   ]

};

export default settings;
