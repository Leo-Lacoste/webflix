import useStyles from "./Chip.style";

function Chip({ dataGenre }) {
  const classes = useStyles();
  return <div className={classes.root}>{dataGenre}</div>;
}

export default Chip;
