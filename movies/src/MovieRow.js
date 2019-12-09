import React, { Component } from "react";
import "./MovieRow.css";

class MovieRow extends Component {
  viewMovie() {
    const url = "https://www.themoviedb.org/movie/" + this.props.movie.id;
    window.location.href = url;
  }

  render() {
    return (
      <table key={this.props.movie.id}>
        <tr className="movieCard">
          <td>
            <img alt="poster" width="100" src={this.props.movie.poster_src} />
          </td>
          <td>
            <h3>{this.props.movie.title}</h3>
            <p>{this.props.movie.overview}</p>
            <input
              className="viewButton"
              type="button"
              onClick={this.viewMovie.bind(this)}
              value="View"
            />
          </td>
        </tr>
      </table>
    );
  }
}

export default MovieRow;
