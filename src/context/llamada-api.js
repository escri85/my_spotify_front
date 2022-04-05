import axios from "axios";
import  { useEffect, useState } from "react";
import React from "react";


// se crea el contexto
const ContextoApi = React.createContext()


const ProovedorApi = ({children})=>{
  const [inputValue, setInputValue] = useState('');

    const [album, setAlbum] = useState([]);
    const [track, setTrack] = useState([]);
    const [artist, setArtist] = useState([]);
    // const[busqueda,setBusqueda]=useState('')
    // const[busquedaInput,setBusquedaInput]=useState([])
  
    const data = "grant_type=client_credentials";
    // eslint-disable-next-line no-useless-concat
    const authToken = btoa(
      "f61cff6278a748d6bbe03c853e785690" +
        ":" +
        "42231b5b410a44108a7b163dfbb08144"
    );
    const headers = {
      headers: {
        Authorization: `Basic ${authToken}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
    };
  
    useEffect(() => {
      axios
        .post("https://accounts.spotify.com/api/token", data, headers)
        .then((res) => {
          const headers2 = {
            headers: { Authorization: `Bearer ${res.data.access_token}` },
          };
          axios
            .get(
              `https://api.spotify.com/v1/search?q=korn&type=track%2Calbum%2Cartist`,
              headers2
            )
            .then((res) => {
              console.log(res);
  
              const albums = res.data.albums.items.map((item) => item);
              const tracks = res.data.tracks.items.map((item) => item);
              const artists = res.data.artists.items.map((item) => item);
              setAlbum(albums);
              setTrack(tracks);
              setArtist(artists);
              // setBusquedaInput(res.data)
            });
        });
  
      console.log("discos", album);
      console.log("cantantes", artist);
      console.log("songs", track);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
  
    // const handleChange = (event)=>{
    //   setBusqueda(event.target.value)
    //   valueInput(event.target.value)
    //   console.log(event.target.value);
    // }
    //     const valueInput=(terminoBusqueda)=>{
    //       // eslint-disable-next-line array-callback-return
    //       const resultadoBusqueda = artist.filter((item)=>{
    //         if(item.name.includes(terminoBusqueda.toLowerCase())){
    //           return item
    //       }
    //     })
    //   console.log('artistasssss',artist);
  
    //   console.log('otro del input',terminoBusqueda);
  
    //   console.log('set del input',resultadoBusqueda);
    //   setBusquedaInput(resultadoBusqueda)
    // }

console.log('este es el valor del contexto =>',inputValue);

    return (
        <ContextoApi.Provider value={{album,track,artist,inputValue,setInputValue}}>
{children}
        </ContextoApi.Provider>
    )
}


export  {ProovedorApi,ContextoApi}