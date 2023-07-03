import React from "react";

const Poster=(props) =>{
  return(
    <>
    <div className="flex flex-col items-start gap-2 px-3 py-0.1">
    <div className="h-65">
    <img src={props.src} alt={props.title} className="w-full h-full rounded-2xl px-2 "/>
    </div>
    <h3
    className={`text-lg font-medium ${
      props.isDark ? "text-white" : "text-black"
    }`}
    >{props.title}</h3>
    <p
    className={`text-base font-normal ${
      props.isDark ? "text-white" : "text-gray-500"
    }` }
    >{props.subtitle}</p>
    </div>
    </>
  )

};

export default Poster;
