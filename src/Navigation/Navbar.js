import React from "react";
import classes from "../Assets/Styles/navbar.module.css";
import { Grid } from "@mui/material";

const Navbar = () => {
  return (
    <Grid container className={classes["navbar"]}>
      Spotify Artist Search
    </Grid>
  );
};

export default Navbar;
