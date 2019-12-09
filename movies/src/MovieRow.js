import React, { Component } from "react";

class MovieRow extends Component {
  viewMovie() {
    const url = "https://www.themoviedb.org/movie/" + this.props.movie.id;
    window.location.href = url;
  }

  render() {
    return (
      <table key={this.props.movie.id}>
        <tr>
          <td>
            <img alt="poster" width="100" src={this.props.movie.poster_src} />
          </td>
          <td>
            <h3>{this.props.movie.title}</h3>
            <p>{this.props.movie.overview}</p>
            <input
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
