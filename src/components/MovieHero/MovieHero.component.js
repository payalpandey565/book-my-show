import React from "react";
import {BsFillStarFill} from "react-icons/bs";
import{BiChevronRight,BiShareAlt} from "react-icons/bi";

const launchRazorPay = () => {
  let options={
    key:"rzp_test_jtxVImHqp3LRND",
    amount:500*100,
    currency:"INR",
    name:"Book My Show Clone",
    description:"Movie Purchase",
    image:"https://play-lh.googleusercontent.com/I8M0mhb7fcRfTi22XzLfeFeIcj3tiKMCQNH4YFPjqkQA8mEakWuaQrDKELo0ISuTZg",
    handler: ()=> {
      alert("Payment Done")
    },
    theme: { color:"#c4242d"}
  };
  let rzp= new window.Razorpay(options);
  rzp.open();
};


const MovieHero=() =>{
  return(
    <>
    <div className="md:hidden ">
    <img
    src="https://assets-in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/spy-et00359675-1686315922.jpg"
    alt="poster"
    />
    </div>

    <div className="hidden md:block lg:hidden">
    <img
    src="https://assets-in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/spy-et00359675-1686315922.jpg"
    alt="poster"

    />
    </div>


    <div className=" relative hidden lg:block text-white flex item-center justify-between" style={{height:"30rem"}}>


    <div className="absolute h-full w-full z-10 flex "
    style={{ backgroundImage:"linear-gradient(90deg, rgb(26, 26, 26) 24.97%, rgb(26, 26, 26) 38.3%, rgba(26, 26, 26, 0.04) 97.47%, rgb(26, 26, 26) 100%)"}}>


    <div className="flex flex-grow my-0 mx-auto items-center relative px-44">
    <img
    src="https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/spy-et00359675-1686315922.jpg"
    alt="poster"
    className="w-50 h-50 rounded-xl"
    />

    <div className="block flex-grow-1 px-8 w-fit mb-30" >
    <h1 className="text-4xl font-bold font-sans">Spy</h1>
    <span className="flex  items-center  gap-2 ">
    <BsFillStarFill className="w-8 h-8 my-8 " style={{color:"#F84464"}}/>
    <h3 className=" font-bold text-xl tracking-wide">7.4/10</h3>
    <span className="flex items-center">
    <h3 className=" text-xl tracking-wide">5.5K Votes</h3>
    <BiChevronRight className="h-4 w-4 mt-2"/>
    </span>


    </span>
    <div className="flex items-center justify-content  bg-navCol-100 h-20 rounded-md ">
    <div className="px-4">
    <h5 className="text-lg font-medium ">Add your rating & review</h5>
    <h6 className=" text-lg text-navCol-300">Your ratings matter</h6>

    </div>
    <div>
    <span className="flex  items-center  px-12 ">
    <button className="bg-white rounded-lg h-10 px-4  text-navCol-400 font-bold items-center ">Rate now</button>
    </span>
    </div>

    </div>

  <div className="flex items-center justify-content gap-3 rounded-md  ">

    < div className="flex items-center justify-content bg-navCol-50  rounded-sm  mt-3 ">
    <h3 className="text-lg text-black px-2 ">2D</h3>
    </div>

    < div className="flex items-center justify-evenly bg-navCol-50  rounded-sm  mt-3">
    <h3 className=" px-1 text-lg text-black  ">Telugu,Malayalam,Tamil,Hindi,Kannada</h3>
    </div>

    </div>
    <div className="flex items-center py-4">
    <h3 className="text-white text-lg">2h 15m</h3>
    <span className="px-2 h-8 text-cennter font-bold" > . </span>
    <h3 className="text-white text-lg">Action , Thriller</h3>
      <span className="px-2 h-8 text-cennter font-bold" > . </span>
    <h3 className="text-white text-lg">UA</h3>
    <span className="px-2 h-8 text-cennter font-bold" > . </span>
    <h3 className="text-white text-lg">29 Jun, 2023</h3>
    </div>
    <div>
    <span className="flex  items-center  px-1 ">
    <button onClick={launchRazorPay} className="bg-navCol-80 rounded-lg h-12 px-16 text-white  items-center ">Book tickets</button>
    </span>
    </div>













    </div>




    </div>
    <div className="relative   pt-2 pr-2">
    <BiShareAlt className="w-10 h-10"/>
    </div>


    </div>







    <img
    src="https://assets-in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/spy-et00359675-1686315922.jpg"
    alt="poster"
    className="w-full h-full"
    />

    </div>

    </>

  )
};

export default MovieHero;
