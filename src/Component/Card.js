import React from "react";
import "./Card.css";


import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import AssignmentIcon from "@mui/icons-material/Assignment";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import FavoriteIcon from "@mui/icons-material/Favorite";

export default function Card(props) {
  return (
    <div className="percard">
      <div className="box">
        <div className="top-bar"></div>

        <div className="nav">
          <input class="heart-btn" id="heart-btn" type="checkbox" />{" "}
          <CheckCircleIcon style={{ color: "green" }} />
          <label className="heart"> </label>{" "}
          <FavoriteIcon style={{ color: "magenta" }} />
        </div>

        <div className="details">
          <img src={props.imgRudra} />
          <h3>{props.Name}</h3>
          <p>{props.Email}</p>
        </div>

        <div className="btn">
          <AssignmentIcon /> <a href="#">Assign </a>
          <RemoveRedEyeIcon /> <a href="#">View </a>
        </div>
      </div>
    </div>
  );
}
