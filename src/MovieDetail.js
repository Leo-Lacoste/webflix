import { Navigate, useParams } from "react-router-dom";
import RatingMovie from "./RatingMovie";
//import data from "./data.json";
import Description from "./Description";
import HorizontalList from "./HorizontalList";
import BackButton from "./BackButton";
import useStyles from "./MovieDetail.style";
import moment, { duration } from "moment";
import Chip from "./Chip";
import Genre from "./Genre";
import { useQuery } from "react-query";

function buildUrl(idMovie) {
  return `${process.env.REACT_APP_API_URL}/movie/${idMovie}?api_key=${process.env.REACT_APP_API_KEY}`;
}

function MovieDetail() {
  const classes = useStyles();
  const idMovieObject = useParams();
  const idMovie = idMovieObject.id;
  //console.log(idMovie);

  const { data, isLoading, isFetching, error } = useQuery(
    ["movie", idMovie],
    () => fetch(buildUrl(idMovie)).then((response) => response.json())
  );
  if (isLoading) {
    console.log("loading" + data);
  }
  if (isFetching) {
    console.log("fetching" + data);
  }

  console.log(data);

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

  //const imageURL = `https://image.tmdb.org/t/p/w154/${currentMovie.poster_path}`;

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

  //var dateSortie = moment(currentMovie.release_date, "YYYY-MM-DD").toDate();

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
            <div className={classes.mainInfoText}>
              <h2>{data.title}</h2>
            </div>
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
