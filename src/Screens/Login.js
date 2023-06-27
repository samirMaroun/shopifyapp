import { Grid } from "@mui/material";
import React from "react";
import classes from "../Assets/Styles/login.module.css";
import Logo from "../Assets/Images/logo.svg.png";
import { loginWithSpotify } from "../appservices.proxy";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
  return (
    <Grid
      container
      justifyContent={"center"}
      alignItems={"center"}
      minHeight={"90vh"}
    >
      <Grid
        item
        container
        direction={"row"}
        className={classes["loginButton"]}
        alignItems={"center"}
        sm={4}
        xs={8}
        onClick={() => {
          loginWithSpotify().then((x) => {
            localStorage.setItem("access_token", x.access_token);
            navigate("/ArtistSearch");
          });
        }}
      >
        <Grid item container xs={6.5} direction={"row-reverse"}>
          Login
        </Grid>
        <Grid item xs={5} container direction={"row-reverse"}>
          <img src={Logo} alt={"logo"} width={40} />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Login;
