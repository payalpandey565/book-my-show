import React from "react";
import DefaultLayout from "../layouts/Default.layout";
import Poster from "../components/Poster/poster.component";
import PlaysFilter from "../components/PlaysFilter/PlaysFilter.component";
const Plays =() =>{
  return(
    <>
    <div className="bg-navCol-150">
    <DefaultLayout/>
    <div className="container mx-auto px-4 py-6 ">
    <div className="w-full lg:flex lg:flex-row-reverse">
      <div className="lg:w-8/12 ">
      <h2 className="text-2xl font-bold mb-4">Plays in Hyderabad</h2>
      <div className="flex flex-wrap ">

  <div className="w-1/2 md:w-1/3 my-3 lg:w-1/4">
  <Poster
  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAxIEp1bCBvbndhcmRz,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00362581-palvjfllah-portrait.jpg"
  title="OMGoddess!"
  subtitle="₹400"
  />
  </div>

  <div className="w-1/2 md:w-1/3 my-3 lg:w-1/4">
  <Poster
  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAxIEp1bCBvbndhcmRz,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00362492-pksshsuwbd-portrait.jpg"
  title="Macbeth"
  subtitle="₹400"
  />
  </div>

  <div className="w-1/2 md:w-1/3 my-3 lg:w-1/4">
  <Poster
  src= "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCA5IEp1bA%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00362033-tdkvvavktj-portrait.jpg"
  title= "Jhund"
  subtitle="₹400"
  />
  </div>

  <div className="w-1/2 md:w-1/3 my-3 lg:w-1/4">
  <Poster
  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-RnJpLCA3IEp1bCBvbndhcmRz,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00356243-rvzrkzdgnx-portrait.jpg"

  title="Daldal"
  subtitle="₹400"
  />
  </div>

  <div className="w-1/2 md:w-1/3 my-3 lg:w-1/4">
  <Poster
  src= "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-RnJpLCAzMCBKdW4gb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00362693-nyfmpfgglf-portrait.jpg"
  title= "The Stage Craft"
  subtitle="₹400"
  />
  </div>

  <div className="w-1/2 md:w-1/3 my-3  lg:w-1/4">
  <Poster
  src= "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAyIEp1bA%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00360872-ekssdblkpz-portrait.jpg"
  title="Sankarshan"
  subtitle="₹400"
  />
  </div>

  <div className="w-1/2 md:w-1/3 my-3 lg:w-1/4">
  <Poster
  src="https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-TW9uLCAzIEp1bCBvbndhcmRz,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00355974-hqmqwvtmcx-portrait.jpg"

  title="Monday Funnies"
  subtitle="₹400"
  />
  </div>

  </div>
  </div>


    <div className="lg:w-1/4 ">
      <h2 className="text-2xl font-bold mb-4">Filters</h2>
      <div>
      <PlaysFilter title="Date"  tags={["Today", "Tomorrow", "This Weekend"]}/>
        <PlaysFilter title="Language"  tags={["Hindi", "Telugu", "English","Bhojpuri"]}/>
          <PlaysFilter title="Categories"  tags={["Theatre"]}/>
            <PlaysFilter title="Genres"  tags={["Aaption", "Comedy", "Drama","Classic","Contemporary"]}/>
              <PlaysFilter title="More Filters"  tags={["Outdoor Events", "Fast Filling"]}/>
                <PlaysFilter title="Price"  tags={["Free", "0-500", "501-2000","Above 2000"]}/>
      </div>


    </div>
    </div>
    </div>
    </div>




    </>
  );
};
export default Plays;
