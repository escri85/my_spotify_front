import React from "react";
import { Menubar } from "primereact/menubar";
import { InputText } from "primereact/inputtext";
import Axios from "axios";
import { useEffect, useState } from "react";
import CardArtist from "../../components/card_artist/CardArtist";
const Navbar = () => {
  const items = [
    {
      label: "Music",
      icon: "pi pi-fw pi-play",
      items: [
        {
          label: "Artist",
          icon: "",
        },
        {
          label: "Songs",
          icon: "",
        },
        {
          label: "Album",
          icon: "",
        },
      ],
    },
    {
      label: "Edit",
      icon: "pi pi-fw pi-pencil",
      items: [
        {
          label: "Left",
          icon: "pi pi-fw pi-align-left",
        },
        {
          label: "Right",
          icon: "pi pi-fw pi-align-right",
        },
        {
          label: "Center",
          icon: "pi pi-fw pi-align-center",
        },
        {
          label: "Justify",
          icon: "pi pi-fw pi-align-justify",
        },
      ],
    },
    {
      label: "Users",
      icon: "pi pi-fw pi-user",
      items: [
        {
          label: "New",
          icon: "pi pi-fw pi-user-plus",
        },
        {
          label: "Delete",
          icon: "pi pi-fw pi-user-minus",
        },
        {
          label: "Search",
          icon: "pi pi-fw pi-users",
          items: [
            {
              label: "Filter",
              icon: "pi pi-fw pi-filter",
              items: [
                {
                  label: "Print",
                  icon: "pi pi-fw pi-print",
                },
              ],
            },
            {
              icon: "pi pi-fw pi-bars",
              label: "List",
            },
          ],
        },
      ],
    },
    {
      label: "events",
      icon: "pi pi-fw pi-calendar",
      items: [
        {
          label: "Edit",
          icon: "pi pi-fw pi-pencil",
          items: [
            {
              label: "Save",
              icon: "pi pi-fw pi-calendar-plus",
            },
            {
              label: "Delete",
              icon: "pi pi-fw pi-calendar-minus",
            },
          ],
        },
        {
          label: "Archieve",
          icon: "pi pi-fw pi-calendar-times",
          items: [
            {
              label: "Remove",
              icon: "pi pi-fw pi-calendar-minus",
            },
          ],
        },
      ],
    },
    {
      label: "Account",
      icon: "pi pi-fw pi-power-off",
      items: [
        {
          label: "Logout",
          icon: "pi pi-fw pi-cog",
          command: () => {
            window.location = "/login";
          },
        },
        { label: "Sign Out", icon: "pi pi-fw pi-power-off" },
      ],
    },
  ];

const[album,setAlbum]=useState([])
const[track,setTrack]=useState([])
const[artist,setArtist]=useState([])
const[busqueda,setBusqueda]=useState('')
const[busquedaInput,setBusquedaInput]=useState([])


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
    

    Axios.post("https://accounts.spotify.com/api/token", data, headers).then(
      (res) => {
        const headers2 = {
          headers: { Authorization: `Bearer ${res.data.access_token}` },
        };
        Axios.get(
          `https://api.spotify.com/v1/search?q=redhot&type=track%2Calbum%2Cartist`,
          headers2
        ).then((res) =>{console.log(res);

           const albums = res.data.albums.items.map((item)=>item)
           const tracks = res.data.tracks.items.map((item)=>item)
           const artists = res.data.artists.items.map((item)=>item)
            setAlbum(albums)
            setTrack(tracks)
            setArtist(artists)
            // setBusquedaInput(res.data)
        }
        );
      }
    );

    console.log('discos',album);
    console.log('cantantes',artist);
    console.log('songs',track);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

//   const handleChange = (event)=>{
//     setBusqueda(event.target.value)
//     valueInput(event.target.value)
//     console.log(event.target.value);
//   }
//   const valueInput=(terminoBusqueda)=>{
//     // eslint-disable-next-line array-callback-return
//     const resultadoBusqueda = artist.filter((item)=>{
//       if(item.name.includes(terminoBusqueda.toLowerCase())){
//         return item
//       }
//     })
//   console.log('artistasssss',artist);
    
//   console.log('otro del input',terminoBusqueda);

//   console.log('set del input',resultadoBusqueda);
//   setBusquedaInput(resultadoBusqueda)
// }

  const start = (
    <img
      alt="logo"
      src="./spotify.png"
      onError={(e) =>
        (e.target.src =
          "https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png")
      }
      height="40"
      className="mr-2"
    ></img>
  );
  const end = (
    <InputText
      placeholder="Search"
      type="text"
      // onChange={handleChange}
      // value={busqueda}
    />
  );
  return (
    <div>
      <div className="navbar">
        <Menubar model={items} start={start} end={end} />
        <div className="artist">
            <CardArtist artist={artist} busquedaInput={busquedaInput}/>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
