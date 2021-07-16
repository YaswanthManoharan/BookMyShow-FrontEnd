import {Route} from "react-router-dom";
import DefaultHOC from "./HOC/Default.HOC";
//Pages
import HomePage from "./pages/Home.page";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function App(){
  return (
  <>
  <DefaultHOC path="/" exact component={HomePage}/>
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