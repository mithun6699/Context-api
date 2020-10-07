import React, { useState, useContext } from "react";
import { MovieContext } from "./MovieContext";

const AddMovie = () => {
  // let cost = 0;
  const [name, setName] = useState("");
  const [price, setprice] = useState("");
  const [movies, setMovies] = useContext(MovieContext);

  const updatename = (event) => {
    setName(event.target.value);
  };
  const updatePrice = (event) => {
    setprice(event.target.value);
  };

  const addMovie = (event) => {
    event.preventDefault();
    setMovies((previous) => [...previous, { name: name, price: price }]);
  };
  return (
    <>
      <p> Movies Available : {movies.length}</p>
      <form onSubmit={addMovie}>
        <input
          type="text"
          name="movielist"
          value={name}
          onChange={updatename}
        />
        <input type="text" name="price" value={price} onChange={updatePrice} />
        <button>Submit</button>
      </form>
    </>
  );
};

export default AddMovie;
