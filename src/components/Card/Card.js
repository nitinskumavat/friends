import React from "react";
import "./card.css";
import fav from "../../Assets/fav.png";
import star from "../../Assets/star.png";
import bin from "../../Assets/bin.png";

export default function Card({ friend, deleteUSer, toggleFav }) {
  return (
    <div className="card-container">
      <div className="name-container">
        <p className="name">{friend.name}</p>
        <p className="desc">is your friend</p>
      </div>
      <div className="fav-del-btn-cont">
        <img
          className="fav-btn"
          src={friend.fav ? fav : star}
          onClick={() => toggleFav(friend.id)}
        ></img>
        <img
          className="del-btn"
          src={bin}
          onClick={() => deleteUSer(friend.id)}
        ></img>
      </div>
    </div>
  );
}
