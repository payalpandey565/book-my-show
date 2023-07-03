import React from "react";
import MovieLayout from "../layouts/Movie.layout";
import {BiSolidCameraMovie} from "react-icons/bi"
import MovieHero from "../components/MovieHero/MovieHero.component";



const MoviePage =() => {
  return(
    <>
    <div>
    <MovieLayout/>
    <MovieHero/>
    <div className="my-12 container mx-auto px-4 lg:w-1/2 lg:ml-44">
    <div className="flex flex-col items-start gap-3">
    <h2 className="text-gray-800 font-bold text-2xl">About the movie</h2>
    <p>A R&AW agent unravels the connection between a notorious arms dealer and the hidden secrets of Netaji Subhash Chandra Bose, risking everything to protect India from impending chaos.</p>
    </div>

    <div className="my-8">
    <hr />
    </div>
    <div>
    <h1 className="text-gray-800 font-bold text-2xl">Applicable Offers</h1>
    <div className="flex items-start gap-2 p-3 bg-yellow-100 border-yellow-400 border-2 border-dashed rounded-md w-112 mt-2 ">
    <BiSolidCameraMovie className="fill-gray-700 w-6 h-6"/>
    <div className="flex flex-col items-start">
    <h3 className="text-gray-900 text-lg">Filmy Pass</h3>
    <p className="text-gray-600 text-sm">Get Rs.75* off on 3 movies you buy/rent on Stream. Buy Filmy Pass @Rs.99</p>
    </div>
    </div>

    </div>

    </div>
    </div>
    </>
  );
};

export default MoviePage;
