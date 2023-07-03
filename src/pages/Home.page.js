import React from "react";
import DefaultLayout from "../layouts/Default.layout";
import EntertainmentCardSlider from "../components/Entertainment/Entertainmentcard.component"
import Premier from "../components/Premier/premier.component.js";
import PosterSlider from "../components/PosterSlider/PosterSlider.component";
import TempPosters from "../config/TempPosters.config";
import OnlinePosters from "../config/osePosters.config";
import OutdoorPosters from "../config/Outdoor.config";
import PlayPosters from "../config/plays.config";
import GamePosters from "../config/gamesPoster.config";
import ExplorePosters from "../config/explorePoster.config";
import PremPosters from "../config/PremPosters.config";

const HomePage = () =>{
  return(
    <>
    <div className="flex flex-col gap-10">

    <DefaultLayout/>
    <div className="ml-20 mr-20">
    <div className="container mx-auto px-4 ">
    <PosterSlider
    images={TempPosters}
    title="Recommended Movies"
    isDark={false}
    />
    </div>

    <div className="container mx-auto px-4 ">
    <h2 className="text-2xl font-bold text-gray-800 py-4  ">
    The Best Of Live Events
    </h2>
    <EntertainmentCardSlider/>
    </div>
    </div>

    <div className="bg-navCol-200 py-16">

    <div className="container mx-auto px-4 ">
    <div className="flex">
    <img src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120:q-80/premiere-banner-web-collection-202208191200.png"
    alt="Rupay"
    className="w-full h-full"/>

    </div>
    <PosterSlider images={PremPosters} title="Premieres" subtitle="Brand new releases every Friday" isDark/>
    </div>
    </div>
    </div>

    <div className="ml-20 mr-20">

    <div className="container mx-auto px-4 ">
    <PosterSlider
    images={OnlinePosters}
    title="Online Streaming Events"
    isDark={false}
    />
    </div>

    <div className="container mx-auto px-4 ">
    <PosterSlider
    images={OutdoorPosters}
    title="Outdoor Events"
    isDark={false}
    />
    </div>

    <div className="container mx-auto px-4 ">
    <PosterSlider
    images={PlayPosters}
    title="The Latest Plays"
    isDark={false}
    />
    </div>

    <div className="container mx-auto px-4 ">
    <PosterSlider
    images={GamePosters}
    title="Top Games & Sport Events"
    isDark={false}
    />
    </div>

    <div className="container mx-auto px-4 ">
    <PosterSlider
    images={ExplorePosters}
    title="Explore Fun Activities"
    isDark={false}
    />
    </div>
    </div>

    </>
  );

};


export default HomePage;
