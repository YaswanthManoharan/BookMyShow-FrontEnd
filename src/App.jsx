import {Route} from "react-router-dom";
import axios from "axios";
//HOC
import DefaultHOC from "./HOC/Default.HOC";
import MovieHOC from "./HOC/Movie.HOC";
//Pages
import HomePage from "./pages/Home.page";
import Movie  from "./pages/Movie.page";
import Plays from "./pages/Plays.page";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
//axios default settings
axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.params={};
axios.defaults.params["api_key"]=process.env.REACT_APP_API_KEY;

function App(){
  return (
  <>
  <DefaultHOC path="/" exact component={HomePage}/>
  <MovieHOC path="/movie/:id" exact component={Movie}/>
  <DefaultHOC path="/plays" exact component={Plays} />
  </>
);

}
export default App;
/*{
  50: '#ffe8e8',
  100: '#f3c1c3',
  200: '#e5999c',
  300: '#da7175',
  400: '#cf4a4e',
  500: '#b53035',
  600: '#8e2528',
  700: '#661a1d',
  800: '#3e0d10',
  900: '#1b0203',
}
*/