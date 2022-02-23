import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  root: {
    borderColor: "black",
    borderWidth: 2,
    borderStyle: "solid",
    height: 138 - 8,
    width: 92 - 8,
    backgroundImage: ({ imageURL }) => `url(${imageURL})`,
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    padding: 4,
  },
  title: {
    color: "black",
    fontSize: 12,
    //textShadow: "1px 1px 6px black",
    wordBreak: "break-word",
    flexGrow: 1,
    width: "100%",
  },
  titleLabel: {
    backgroundColor: "rgba(209, 216, 222, 0.7)",
    fontSize: 14,
  },
  button: {
    border: "none",
    background: "transparent",
    opacity: 0.5,
    fontSize: 16,
  },
  added: {
    opacity: 1,
  },
});

export default useStyles;
