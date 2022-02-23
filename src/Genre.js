import data from "./data.json";
import useStyles from "./Genre.style";

function Genre({ label }) {
  const classes = useStyles();
  //const label = data.genres[id];
  if (!label) return null;
  return (
    <div data-testid="genre" className={classes.root}>
      {label}
    </div>
  );
}

export default Genre;
