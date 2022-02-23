import { useState, useEffect } from "react";
import { useQuery } from "react-query";
import { useSearchParams } from "react-router-dom";

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

  console.log(process.env.REACT_APP_API_KEY);

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

  const { data, isLoading, isFetching, error } = useQuery(
    ["movies", value],
    () => fetch(buildUrl(value)).then((response) => response.json())
  );

  /*const id = 634649;
  const { mov, isLoadingMov, isFetchingMov, errorMov } = useQuery(
    ["movie", id],
    () =>
      fetch(
        "https://api.themoviedb.org/3/movie/634649?api_key=aeeca3eb934c595a32cbd53a16f76f64"
      ).then((response) => response.json())
  );

  console.log(mov);*/

  console.log("Data");
  console.log(data);

  /*const movies = data.movies.filter((movie) =>
    movie.title.match(new RegExp(value, "i"))
  );*/

  return (
    <div className={classes.root}>
      <Input value={value} onChange={onChange} />
      {error && <div className={classes.error}>{error}</div>}
      {(isLoading || isFetching) && <div>Loading movies...</div>}
      {!isLoading && !error && (
        <VerticalList className={classes.list} data={data?.results} />
      )}
    </div>
  );
}

export default Home;
