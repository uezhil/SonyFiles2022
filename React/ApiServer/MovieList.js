import React from "react";
import PropTypes from "prop-types";

function MovieList(props) {
  return (
    <>
      <h2 className="display-3">Welcome to EMovies!</h2>
      <h4>Check out all the blockbusters here..</h4>
      <table className="table">
        <thead>
          <tr>
            <td>Title</td>
            <td>Star</td>
            <td>Genre</td>
          </tr>
        </thead>
        <tbody>
          {props.movies.map((movie) => {
            return (
              <tr>
                <td>{movie.title}</td>
                <td>{movie.star}</td>
                <td>{movie.genre}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default MovieList;
