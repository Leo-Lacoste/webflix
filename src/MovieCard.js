import classNames from "classnames";
import useStyles from "./MovieCard.style";

function MovieCard({ id, poster_path, title, addToFavorite, favorites }) {
  const imageURL = `https://image.tmdb.org/t/p/w92${poster_path}`;
  const classes = useStyles({ imageURL });
  return (
    <div className={classes.root}>
      <div className={classes.title}>
        <h2 className={classes.titleLabel}>{title}</h2>
      </div>
      <button
        onClick={addToFavorite(id)}
        className={classNames(classes.button, {
          [classes.added]: favorites.includes(id),
        })}
      >
        <span role="img" aria-label="heart">
          ❤️
        </span>
      </button>
    </div>
  );
}

MovieCard.defaultProps = {
  favorites: [],
  addToFavorite: Function.prototype,
};

export default MovieCard;
