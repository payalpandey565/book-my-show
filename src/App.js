import {Routes,Route} from "react-router-dom";
import './App.css'
//HOC
import DefaultHOC from "./HOC/Default.HOC";
import MovieHOC from "./HOC/Movie.HOC";

//Pages
import HomePage from "./pages/Home.page";
import MoviePage from "./pages/Movie.page";
import Plays from "./pages/Plays.page";

//css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function App(){
  return(
    <>
    <Routes>


    <Route path="/"  DefaultHOC element= {<HomePage/>} />
    <Route path="/movie/:id" MovieHOC element={<MoviePage/>} />
    <Route path="/plays"  DefaultHOC element= {<Plays/>} />

    </Routes>
    </>



  );
}

export default App;
