import React from "react";
import { Menubar } from "primereact/menubar";
import './Navbar.scss';
import { useNavigate } from "react-router-dom";


const Navbar = () => {
  const navigate = useNavigate()
  const items = [
    {
      label: "Music",
      icon: "pi pi-fw pi-play",
      items: [
        {
          label: "Artist",
          icon: "",
          command:()=>{
            navigate("/artist")
          }
        },
        {
          label: "Songs",
          icon: "",
          command:()=>{
            navigate("/track")
          }
        },
        {
          label: "Album",
          icon: "",
          command:()=>{
            navigate("/album")
          }
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
  return (
    <div>
      <div className="navbar">
        <Menubar model={items} start={start} style={{justify:'space-betweend'}}/>
      </div>
    </div>
  );
};

export default Navbar;
