import React, { Component } from "react";
import MovieRow from "./MovieRow";
import $ from "jquery";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.search();
  }

  search() {
    var movieRows = [];
    const url =
      "https://api.themoviedb.org/3/movie/popular?api_key=f3eb96df0360fa103a28f8d0f1518224&language=en-US&page=1";
    $.ajax({
      url: url,
      success: searchResults => {
        const results = searchResults.results;
        results.forEach(movie => {
          movie.poster_src =
            "http://image.tmdb.org/t/p/w185" + movie.poster_path;
          const movieRow = <MovieRow key={movie.id} movie={movie} />;
          movieRows.push(movieRow);
        });
        this.setState({ rows: movieRows });
      },
      error: (xhr, status, err) => {
        console.log(err);
      }
    });
  }

  render() {
    return (
      <div>
        <table className="titleBar">
          <tbody>
            <tr>
              <td>
                <img
                  alt="app_icon"
                  width="50"
                  src="https://www.themoviedb.org/assets/2/v4/logos/primary-green-d70eebe18a5eb5b166d5c1ef0796715b8d1a2cbc698f96d311d62f894ae87085.svg"
                ></img>
              </td>
              <td>
                <h1>MovieDB Library</h1>
              </td>
            </tr>
          </tbody>
        </table>
        {this.state.rows}
      </div>
    );
  }
}

export default App;
