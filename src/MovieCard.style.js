import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  root: {
    borderColor: "black",
    borderWidth: 2,
    borderStyle: "solid",
    height: 138,
    width: 92,
    backgroundImage: ({ imageURL }) => `url(${imageURL})`,
    overflow: "hidden",
  },
  title: {
    padding: 8,
    color: "black",
    fontSize: 12,
    //textShadow: "1px 1px 6px black",
    wordBreak: "break-word",
    backgroundColor: "rgba(209, 216, 222, 0.7)",
  },
});

export default useStyles;
