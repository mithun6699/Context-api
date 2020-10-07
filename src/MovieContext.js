import React, { useState, createContext } from "react";

export const MovieContext = createContext();

export const MovieProvider = (props) => {
  const [movies, setMovies] = useState([
    // {
    //   name: "V-Telugu",
    //   price: "10rs",
    //   id: "1",
    // },
    // {
    //   name: "V-Kannada",
    //   price: "20rs",
    //   id: "2",
    // },
    // {
    //   name: "V-Kannada",
    //   price: "200rs",
    //   id: "3",
    // },
  ]);
  return (
    <MovieContext.Provider value={[movies, setMovies]}>
      {props.children}
    </MovieContext.Provider>
  );
};
