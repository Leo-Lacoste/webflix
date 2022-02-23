import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  root: {
    display: "flex",
    alignItems: "center",
    paddingLeft: 8,
    paddingRight: 8,
  },
  nav: {
    flexGrow: 1,
    display: "flex",
    justifyContent: "flex-end",
  },
  logo: {
    height: 32,
    width: 32,
    padding: 4,
  },
  title: {
    margin: 0,
    fontSize: 20,
  },
  link: {
    textDecoration: "none",
    backgroundColor: "white",
    color: "black",
    border: "solid",
    borderWidth: 2,
    borderColor: "white",
    borderRadius: "5px",
    paddingLeft: 8,
    paddingRight: 8,
    marginLeft: 8,
  },
});

export default useStyles;
