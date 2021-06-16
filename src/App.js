import "./App.css";
import { useState } from "react";
import { useRef } from "react";
import MovieCard from "./Components/MovieCard";
import MovieList from "./Components/MovieList";

function App() {
  return (
    <div className="App">
      <MovieList />
    </div>
  );
}

export default App;
