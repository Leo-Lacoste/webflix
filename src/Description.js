import ShowMoreText from "react-show-more-text";
import useStyles from "./Description.style";

function ExpandText({ text }) {
  const classes = useStyles();
  return <span className={classes.rootLabel}>{text}</span>;
}

function Description({ descriptionFilm }) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <ShowMoreText
        /* Default options */
        lines={3}
        more={<ExpandText text={"Lire plus"} />}
        less={<ExpandText text={"Lire moins"} />}
        expanded={false}
        width={0}
        truncatedEndingComponent={"... "}
      >
        {descriptionFilm}
      </ShowMoreText>
    </div>
  );
}

export default Description;
