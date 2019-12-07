import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    const movies = [
      {
        id: 0,
        title: "Avengers: Infinity War",
        overview: "Another hero movie :/"
      },
      {
        id: 1,
        title: "Avengers: End Game",
        overview: "Thanos dies"
      },
      {
        id: 2,
        title: "Spider Man",
        overview: "Uncle May <3"
      }
    ];

    var moviesRows = [];

    movies.forEach(movie => {
      const movieRow = (
        <table key={movie.id}>
          <tr>
            <td>{movie.title}</td>
            <td>{movie.overview}</td>
          </tr>
        </table>
      );
      moviesRows.push(movieRow);
    });

    this.state = {
      rows: moviesRows
    };
  }

  render() {
    return (
      <div className="App">
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
        <input
          className="searchInput"
          placeholder="Insira um título aqui"
        ></input>
        {this.state.rows}
      </div>
    );
  }
}

export default App;
