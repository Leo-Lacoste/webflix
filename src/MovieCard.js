import { useDispatch, useSelector } from "react-redux";
import classNames from "classnames";
import useStyles from "./MovieCard.style";
import { favoritesSlice } from "./slices";

function MovieCard({ id, poster_path, title }) {
  const imageURL = `https://image.tmdb.org/t/p/w92${poster_path}`;
  const classes = useStyles({ imageURL });
  const favorites = useSelector((state) => state.favorites);
  const dispatch = useDispatch();
  const addToFavorite = (event) => {
    event.preventDefault();
    dispatch(favoritesSlice.actions.toggle({ id }));
  };
  return (
    <div className={classes.root}>
      <div className={classes.title}>
        <h2 className={classes.titleLabel}>{title}</h2>
      </div>
      <button
        onClick={addToFavorite}
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

export default MovieCard;
