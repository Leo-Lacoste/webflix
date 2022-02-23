import { useState, useEffect } from "react";
import { useQuery } from "react-query";
import { useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Input from "./Input";
import VerticalList from "./VerticalList";
import useStyles from "./Home.style";

function buildUrl(value) {
  return value.length > 0
    ? `${process.env.REACT_APP_API_URL}/search/movie?query=${value}&api_key=${process.env.REACT_APP_API_KEY}`
    : `${process.env.REACT_APP_API_URL}/movie/popular?api_key=${process.env.REACT_APP_API_KEY}`;
}

function Home() {
  const classes = useStyles();
  const [params, setParams] = useSearchParams();
  const [value, setValue] = useState(params.get("q") || "");

  // useEffect(() => {
  //   fetchMovies();
  // });

  const onChange = (event) => {
    const q = event.target.value;

    if (q) {
      setParams({ q });
    } else {
      setParams({});
    }
  };

  useEffect(() => {
    setValue(params.get("q") || "");
  }, [params]);

  /*const { data, isLoading, isFetching, error } = useQuery(
    ["movies", value],
    () => fetch(buildUrl(value)).then((response) => response.json())
  );*/

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: "FETCH_MOVIES" });
  }, [dispatch]);

  const movies = useSelector((state) => state.movies);

  /*const movies = data.movies.filter((movie) =>
    movie.title.match(new RegExp(value, "i"))
  );*/

  return (
    <div className={classes.root}>
      <Input value={value} onChange={onChange} />
      <VerticalList className={classes.list} data={movies} />
    </div>
  );
}

export default Home;
