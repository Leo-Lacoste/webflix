import { Rating } from "react-simple-star-rating";
import useStyles from "./RatingMovie.style";

function RatingMovie({ rating, nbVotes }) {
  const classes = useStyles();
  const ratingBase5 = rating / 2;

  return (
    <div className={classes.root}>
      <h4 className={classes.text}>Note du public</h4>
      <Rating
        initialValue={ratingBase5}
        fillColor="orange"
        emptyColor="gray"
        size={30}
        readonly={true}
      />
      <span className={classes.labelRate}>
        {rating}/10 ({nbVotes} votes)
      </span>
    </div>
  );
}
/*function Chip() {
  return (
    <div>
      <h2>Rating from state:</h2>
      <StarRatingComponent
        name="rate2"
        editing={false}
        starCount={10}
        value={8}
      />
    </div>
  );
}*/

export default RatingMovie;
