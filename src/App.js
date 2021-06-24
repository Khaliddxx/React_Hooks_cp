import "./App.css";
import { useState } from "react";
import { useRef } from "react";
import MovieCard from "./Components/MovieCard";
import MovieList from "./Components/MovieList";

import { movies } from "./movies";
import AddMovieModal from "./Components/AddMovieModal";

function App() {
  const [data, setData] = useState(movies);

  return (
    <div className="App">
      <MovieList data={data} />
      <AddMovieModal />
    </div>
  );
}

export default App;
