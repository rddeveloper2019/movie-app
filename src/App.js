import axios from 'axios';
import React from 'react';
import Movie from './Movie';
import './App.css';

class App extends React.Component {
  state = {
    isLoading: true,
  };

  componentWillUnmount() {}
  getmovies = async () => {
    const {
      data: {
        data: { movies },
      },
    } = await axios.get(
      'https://yts.mx/api/v2/list_movies.json?sort_by=rating'
    );

    this.setState({ movies, isLoading: false });
  };

  componentDidMount() {
    this.getmovies();
  }
  componentDidUpdate() {}

  render() {
    const { isLoading, movies } = this.state;
    return (
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader_text">Загрузка...</span>
          </div>
        ) : (
          <div className="movies">
            {movies.map((movie) => {
              return (
                <Movie
                  key={movie.id}
                  id={movie.id}
                  year={movie.year}
                  summary={movie.summary}
                  poster={movie.medium_cover_image}
                  title={movie.title}
                  genres={movie.genres}
                />
              );
            })}
          </div>
        )}
      </section>
    );
  }
}
export default App;
