import React from "react";
import {  NavLink } from "react-router-dom";
import './Call.scss'
const Call = ({artist}) => {


  return (
    <div className="containerArtist">
      {artist.map((item) =>
        item.images.map((imagen) =>
          imagen.width === 640 ? (
            <NavLink to={`/cardArtist/${item.name}`}>
              <div className="imghvr-blur">
                <img src={imagen.url} alt="" className="imgArtist" />
                <figcaption>
                <h2>{item.name}</h2>
                </figcaption>
              </div>
            </NavLink>
          ) : null
        )
      )}
    </div>
  );
};
export default Call;
