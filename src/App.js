import React from "react";

import "./App.css";
import MovieList from "./MovieList";
import { MovieProvider } from "./MovieContext";
// we may have lot of states , that doesnt belong to App component
import AddMovie from "./AddMovie";
function App() {
  return (
    <MovieProvider>
      <div className="App">
        <MovieList />
        <AddMovie />
      </div>
    </MovieProvider>
  );
}

export default App;
