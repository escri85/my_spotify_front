import React from "react";
import "./CardArtist.scss";
import {  useParams } from "react-router-dom";
const CardArtist = (props) => {
  const { artist,album} = props;
const name = artist.map((item)=>item.name)
const params = useParams()
  console.log('nombre',name);
  console.log('parametros',params);
  console.log('albums',album);
console.log(artist);

  return (
    <div>
      
    </div>
  );
};

export default CardArtist;
