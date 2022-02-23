import { Navigate, useParams } from "react-router-dom";
import RatingMovie from "./RatingMovie";
//import data from "./data.json";
import Description from "./Description";
import HorizontalList from "./HorizontalList";
import BackButton from "./BackButton";
import useStyles from "./MovieDetail.style";
import moment, { duration } from "moment";
import Genre from "./Genre";
import { useQuery } from "react-query";

function buildUrlDetailMovie(idMovie) {
  return `${process.env.REACT_APP_API_URL}/movie/${idMovie}?api_key=${process.env.REACT_APP_API_KEY}`;
}

function buildUrlGenres() {
  return `${process.env.REACT_APP_API_URL}/genre/movie/list?api_key=${process.env.REACT_APP_API_KEY}`;
}
function buildUrlSimilar() {
  return `${process.env.REACT_APP_API_URL}/movie/popular?api_key=${process.env.REACT_APP_API_KEY}`;
}

function MovieDetail({ addToFavorite, favorites }) {
  const classes = useStyles();
  const idMovieObject = useParams();
  const idMovie = idMovieObject.id;
  //console.log(idMovie);

  const { data, isLoading, isFetching, error } = useQuery(
    ["movie", idMovie],
    () =>
      fetch(buildUrlDetailMovie(idMovie)).then((response) => response.json())
  );

  const {
    data: genreList,
    isLoading: loadingGenreList,
    isFetching: fetchingGenreList,
    error: errorGenreList,
  } = useQuery("genreList", () =>
    fetch(buildUrlGenres()).then((response) => response.json())
  );

  const {
    data: filmPopular,
    isLoading: loadingFilmPopular,
    isFetching: fetchingFilmPopular,
    error: errorFilmPopular,
  } = useQuery("filmPopular", () =>
    fetch(buildUrlSimilar()).then((response) => response.json())
  );

  console.log(filmPopular);

  console.log(genreList);

  //console.log(mov);
  // if (!isLoading && !isFetching) console.log(mov);

  /*const datas = fetch(
    "https://api.themoviedb.org/3/movie/634649?api_key=aeeca3eb934c595a32cbd53a16f76f64"
  )
    .then((response) => response.json())
    .then((responseData) => {
      console.log(responseData);
      return responseData;
    });
  console.log(datas);*/

  /*const currentMovie = data.movies.filter(
    (movie) => movie.id === parseInt(idMovieObject.id)
  )[0];*/

  //if (!currentMovie) return <Navigate to="/" replace={true} />;
  let imageURL;
  let dateSortie;
  if (!isLoading && !error) {
    imageURL = `https://image.tmdb.org/t/p/w154/${data.poster_path}`;
    dateSortie = moment(data.release_date, "YYYY-MM-DD").toDate();
  }
  //

  let moviesLike;
  /*if (!loadingFilmPopular && !errorFilmPopular && isLoading && !error) {
    moviesLike = filmPopular.results.filter((movie) => {data.genre});
  }*/
  /*const moviesLike = data.movies.filter(
    (movie) =>
      currentMovie.genre_ids.some((genre) => movie.genre_ids.includes(genre)) &&
      movie.id !== currentMovie.id
  );*/

  /*const genresLabel = currentMovie.genre_ids.map((index) => {
    return data.genres[index];
  });*/

  var days = [
    "Dimanche",
    "Lundi",
    "Mardi",
    "Mercredi",
    "Jeudi",
    "Vendredi",
    "Samedi",
  ];

  var months = [
    "Janvier",
    "Février",
    "Mars",
    "Avril",
    "Mai",
    "Juin",
    "Juillet",
    "Aout",
    "Septembre",
    "Octobre",
    "Novembre",
    "Décembre",
  ];

  return (
    <div className={classes.root}>
      <div className={classes.btnBack}>
        <BackButton />
      </div>
      {error && <div className={classes.error}>{error}</div>}
      {(isLoading || isFetching) && <div>Loading movies...</div>}
      {!isLoading && !error && (
        <div className={classes.content}>
          <div className={classes.mainInfo}>
            <div className={classes.posterFilmDiv}>
              <img
                className={classes.posterFilm}
                src={imageURL}
                alt={`imageFilm${data.title}`}
              />
            </div>
            <div className={classes.mainInfoText}>
              <h2>{data.title}</h2>
              <p>
                Sortie le {days[dateSortie.getDay()]} {dateSortie.getDate()}{" "}
                {months[dateSortie.getMonth()]} {dateSortie.getFullYear()}
              </p>
              <div className={classes.genreList}>
                {data.genres.map((genre) => {
                  return (
                    <div key={genre.id}>
                      <Genre label={genre.name} />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div>
            <RatingMovie rating={data.vote_average} nbVotes={data.vote_count} />
            <Description descriptionFilm={data.overview} />
            {/*<HorizontalList data={moviesLike} addToFavorite={addToFavorite}
        favorites={favorites} />*/}
          </div>
        </div>
      )}
      {/*<div className={classes.content}>
        <div className={classes.mainInfo}>
          <div className={classes.posterFilmDiv}>
            <img
              className={classes.posterFilm}
              src={imageURL}
              alt={`imageFilm${currentMovie.title}`}
            />
          </div>
          <div className={classes.mainInfoText}>
            <h2>{currentMovie.title}</h2>
            <p>Réalisé par {currentMovie.director}</p>
            <p>
              Sortie le {days[dateSortie.getDay()]} {dateSortie.getDate()}{" "}
              {months[dateSortie.getMonth()]} {dateSortie.getFullYear()}
            </p>
            <p>{currentMovie.duration} minutes</p>
            <div className={classes.genreList}>
              {currentMovie.genre_ids.map((genre_id) => {
                return (
                  <div key={genre_id}>
                    <Genre id={genre_id} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div>
          <RatingMovie
            rating={currentMovie.vote_average}
            nbVotes={currentMovie.vote_count}
          />
            <Description descriptionFilm={currentMovie.overview} />
          {<HorizontalList data={moviesLike} />
        </div>
      </div>*/}
    </div>
  );
}

export default MovieDetail;
