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
import { useDispatch, useSelector } from "react-redux";

function buildUrlDetailMovie(idMovie) {
  return `${process.env.REACT_APP_API_URL}/movie/${idMovie}?api_key=${process.env.REACT_APP_API_KEY}`;
}

function buildUrlGenres() {
  return `${process.env.REACT_APP_API_URL}/genre/movie/list?api_key=${process.env.REACT_APP_API_KEY}`;
}
function buildUrlSimilar() {
  return `${process.env.REACT_APP_API_URL}/movie/popular?api_key=${process.env.REACT_APP_API_KEY}`;
}

function MovieDetail() {
  const classes = useStyles();
  const idMovieObject = useParams();
  const idMovie = idMovieObject.id;

  /*const { data, isLoading, isFetching, error } = useQuery(
    ["movie", idMovie],
    () =>
      fetch(buildUrlDetailMovie(idMovie)).then((response) => response.json())
  );*/

  const movies = useSelector((state) => state.movies);
  const data = movies.filter((movie) => movie.id == idMovie)[0];

  /*const {
    data: filmPopular,
    isLoading: loadingFilmPopular,
    isFetching: fetchingFilmPopular,
    error: errorFilmPopular,
  } = useQuery("filmPopular", () =>
    fetch(buildUrlSimilar()).then((response) => response.json())
  );*/

  let imageURL = `https://image.tmdb.org/t/p/w154/${data.poster_path}`;
  let dateSortie = moment(data.release_date, "YYYY-MM-DD").toDate();

  const moviesLike = movies.filter(
    (movie) =>
      data.genre_ids.some((genre) => movie.genre_ids.includes(genre)) &&
      movie.id !== data.id
  );

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
              {data.genre_ids.map((genre) => {
                return (
                  <div key={genre}>
                    <Genre id={genre} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div>
          <RatingMovie rating={data.vote_average} nbVotes={data.vote_count} />
          <Description descriptionFilm={data.overview} />
          <HorizontalList data={moviesLike} />
        </div>
      </div>
    </div>
  );
}

export default MovieDetail;
