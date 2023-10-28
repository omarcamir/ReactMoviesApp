import NavBar from "./NavBar/NavBar";
import Home from "./Home";
import Movies from "./Movies/Movies";
import TvShows from "./TvShows/TvShows";
import Celebs from "./Celebs/Celebs";
import Blog from "./Blog/Blog";
import {BrowserRouter , Routes , Route} from "react-router-dom"
import './App.css';
import NotFound from "./NotFound/NotFound";
import MovieDetails from "./MovieDetails/MovieDetails";

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element = {<Home/>}/>
        <Route path="/movies" element={<Movies/>}/>
        <Route path="/tv-shows" element={<TvShows/>}/>
        <Route path="/celebs" element={<Celebs/>}/>
        <Route path="/blog" element={<Blog/>}/>
        <Route path="/:name/:id" element={<MovieDetails/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
