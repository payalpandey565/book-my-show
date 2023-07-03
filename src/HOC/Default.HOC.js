import React from "react";
import {Routes,Route} from "react-router-dom";

import DefaultLayout from "../layouts/Default.layout";


const DefaultHOC= ({component:Component, ...rest}) =>{
  return (
    <>
    <Routes>
    <Route
    {...rest}

    component = {(props) => (
      <DefaultLayout>
          <Component  {...props}/>
      </DefaultLayout>

    )
  }
  />
  </Routes>
  </>

);

};

export default DefaultHOC;
