import { AppBar,  Toolbar } from "@mui/material";
import logo from "../assets/logo.svg";
import SearchBar from "./SearchBar";

import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <AppBar sx={{backgroundColor:"#f5f5f5" , height:"64px", borderRadius:10,width:"90%",position:"static",mx:"auto"}}>
      <Toolbar sx={{display:"flex",justifyContent:"space-between"}}>
        <SearchBar />


        <Link to="/" style={ { height:"64px", margin: 0 }} >
        <img src={logo} alt="" />
        </Link>

      </Toolbar>
    </AppBar>
  );
};

export default Header;
