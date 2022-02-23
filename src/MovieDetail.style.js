import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  root: {
    justifyContent: "center",
    padding: 16,
  },
  content: { marginTop: 40 },
  mainInfo: {
    display: "flex",
  },
  posterFilmDiv: {
    width: 154,
    height: "auto",
    borderColor: "black",
    borderWidth: 2,
    borderStyle: "solid",
  },
  posterFilm: {
    height: "100%",
    width: 154,
  },
  mainInfoText: {
    width: "100%",
    marginLeft: 5,
    paddingLeft: 10,
    textAlign: "center",
  },
  genreList: { display: "flex", flexWrap: "wrap" },
});

export default useStyles;
