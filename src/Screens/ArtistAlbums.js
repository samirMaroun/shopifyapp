import React, { useEffect, useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getAlbums } from "../appservices.proxy";
import classes from "../Assets/Styles/artistsearch.module.css";
import { Grid } from "@mui/material";
import StarRateIcon from "@mui/icons-material/StarRate";

const ArtistAlbums = () => {
  const useQuery = () => {
    const { search } = useLocation();
    return useMemo(() => new URLSearchParams(search), [search]);
  };
  const query = useQuery();
  const Id = query.get("id");
  const Name = query.get("name");
  const navigate = useNavigate();
  const [albums, setAlbums] = useState([]);
  useEffect(() => {
    if (Id)
      getAlbums(Id).then((x) => {
        setAlbums(x);
      });
  }, [Id]);
  return (
    <Grid container paddingTop={5} paddingLeft={5}>
      <Grid item className={classes["artsName2"]} xs={12}>
        {Name}
      </Grid>

      <Grid item className={classes["followers2"]} xs={12}>
        Albums
      </Grid>
      {albums?.items ? (
        <Grid
          item
          container
          direction={"row"}
          gap={10}
          alignItems={"center"}
          paddingTop={5}
          justifyContent={"center"}
        >
          {albums?.items?.map((album) => (
            <Grid item xs={2.3} height={410} border={"1px solid #000000"}>
              <img
                src={album?.images[0]?.url}
                width={"100%"}
                height={200}
                alt="h"
              ></img>
              <Grid
                item
                height={70}
                className={classes["artsName"]}
                paddingLeft={2}
                paddingTop={2}
                xs={12}
              >
                {album.name}
              </Grid>

              <Grid
                item
                className={classes["followers"]}
                paddingLeft={2}
                xs={12}
              >
                {album?.artists?.map((x) => x.name+" ")}
              </Grid>
              <Grid
                item
                className={classes["followers3"]}
                paddingLeft={2}
                paddingTop={2}
                xs={12}
              >
                {album.release_date}
              </Grid>
              <Grid
                item
                className={classes["followers3"]}
                paddingLeft={2}
                xs={12}
              >
                {album.total_tracks}
              </Grid>
              <Grid
                item
                height={57}
                marginTop={1}
                bgcolor={"rgb(221, 219, 219)"}
                container
                justifyContent={"center"}
                alignItems={"center"}
                className={classes["followers3"]}
                onMouseOver={(e) => {
                  e.target.style.cursor = "pointer";
                }}
                onClick={() => {
                  window.open(album.href);
                }}
              >
                Preview on Shopify
              </Grid>
            </Grid>
          ))}
        </Grid>
      ) : (
        <></>
      )}
    </Grid>
  );
};

export default ArtistAlbums;
