import { Link } from "react-router-dom";
import MovieCard from "./MovieCard";
import useStyles from "./HorizontalList.style";
import Carousel from "react-elastic-carousel";
import "./HorizontalList.css";

function HorizontalList({ data, addToFavorite, favorites }) {
  const classes = useStyles();

  const breakPoints = [
    { width: 1, itemsToShow: 2, itemsToScroll: 2 },
    { width: 550, itemsToShow: 3, itemsToScroll: 3 },
    { width: 768, itemsToShow: 3, itemsToScroll: 3 },
    { width: 1200, itemsToShow: 5, itemsToScroll: 5 },
  ];

  return (
    <div className={classes.root}>
      <Carousel pagination={false} breakPoints={breakPoints}>
        {data.map((entry) => (
          <div key={entry.id} className={classes.item}>
            <Link to={`/movies/${entry.id}`} className={classes.link}>
              <MovieCard
                {...entry}
                addToFavorite={addToFavorite}
                favorites={favorites}
              />
            </Link>
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default HorizontalList;
