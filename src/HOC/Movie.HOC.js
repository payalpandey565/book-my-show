import React from "react";
import {Routes,Route} from "react-router-dom";

import MovieLayout from "../layouts/Movie.layout";


const MovieHOC= ({component:Component, ...rest}) =>{
  return (
    <>
    <Routes>
    <Route
    {...rest}

    component = {(props) => (
      <MovieLayout>
          <Component  {...props}/>
      </MovieLayout>

    )
  }
  />
  </Routes>
  </>

);

};

export default MovieHOC;
