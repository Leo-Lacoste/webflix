import useStyles from "./BackButton.style";
import { useNavigate } from "react-router-dom";

function BackButton() {
  let navigate = useNavigate();
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <button onClick={() => navigate(-1)}>Retour</button>
    </div>
  );
}

export default BackButton;
