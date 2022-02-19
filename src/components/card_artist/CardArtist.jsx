import React from "react";

const CardArtist = (props) => {
  const { artist, busquedaInput} = props;
  return (
    <div>
      {artist.map((item) => (
        <div>
          {item.images.map((imagen) =>imagen.width===640 ? <img src={imagen.url} alt="" /> : null)} 

          <p>{item.name}</p>
        </div>
      ))}
    </div>
  );
};

export default CardArtist;
