import { Grid, TextField } from "@mui/material";
import React, { useEffect, useMemo, useState } from "react";
import classes from "../Assets/Styles/artistsearch.module.css";
import SearchIcon from "@mui/icons-material/Search";
import { searchArtist } from "../appservices.proxy";
import StarRateIcon from "@mui/icons-material/StarRate";
import { useLocation, useNavigate } from "react-router-dom";
const ArtistSearch = () => {
  const useQuery = () => {
    const { search } = useLocation();
    return useMemo(() => new URLSearchParams(search), [search]);
  };
  const query = useQuery();
  const [searchText, setSearchText] = useState(query.get("search"));
  const [albums, setAlbums] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    if (searchText)
      searchArtist(searchText === null ? "" : searchText).then((x) => {
        setAlbums(x.artists);
      });
  }, [searchText]);
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
        alignItems={"center"}
        lg={4}
        md={5}
        xs={11}
        paddingTop={2}
      >
        <TextField
          fullWidth
          label={searchText ? "" : "Search An Artist..."}
          InputLabelProps={{
            shrink: false,
            sx: {
              fontFamily: "Roboto",
              fontSize: 30,
              marginLeft: "10%",
            },
          }}
          InputProps={{
            style: {
              backgroundColor: "#fff",
              height: 70,
              fontFamily: "Roboto",
              fontSize: 30,
            },

            endAdornment: (
              <SearchIcon
                htmlColor={"rgb(187, 186, 186)"}
                fontSize={"medium"}
              />
            ),
          }}
          onChange={(e) => {
            setSearchText(e.target.value);
            navigate(`/ArtistSearch?search=${e.target.value}`);
          }}
          value={searchText ? searchText : ""}
        />
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
          {albums?.items?.map((artist, index) => (
            <Grid
              key={index}
              item
              lg={2.3}
              md={3}
              sm={4}
              xs={8}
              height={350}
              border={"1px solid #000000"}
              onMouseOver={(e) => {
                e.target.style.cursor = "pointer";
              }}
              onClick={() => {
                navigate(`/albums?id=${artist.id}&name=${artist.name}`);
              }}
            >
              <img
                src={artist?.images[0]?.url}
                width={"100%"}
                height={200}
                alt="h"
              ></img>
              <Grid
                item
                className={classes["artsName"]}
                paddingLeft={2}
                paddingTop={2}
                xs={12}
              >
                {artist.name}
              </Grid>

              <Grid
                item
                className={classes["followers"]}
                paddingLeft={2}
                xs={12}
              >
                {artist.followers.total} &nbsp; followers
              </Grid>
              <Grid
                item
                container
                direction={"row"}
                gap={1}
                paddingLeft={1}
                paddingTop={5}
              >
                <Grid item>
                  {artist.popularity > 1 ? (
                    <StarRateIcon
                      fontSize="large"
                      htmlColor="rgb(187, 186, 186)"
                    />
                  ) : (
                    <></>
                  )}
                </Grid>
                <Grid item>
                  {artist.popularity >= 20 ? (
                    <StarRateIcon
                      fontSize="large"
                      htmlColor="rgb(187, 186, 186)"
                    />
                  ) : (
                    <></>
                  )}
                </Grid>
                <Grid item>
                  {artist.popularity >= 40 ? (
                    <StarRateIcon
                      fontSize="large"
                      htmlColor="rgb(187, 186, 186)"
                    />
                  ) : (
                    <></>
                  )}
                </Grid>
                <Grid item>
                  {artist.popularity > 60 ? (
                    <StarRateIcon
                      fontSize="large"
                      htmlColor="rgb(187, 186, 186)"
                    />
                  ) : (
                    <></>
                  )}
                </Grid>
                <Grid item>
                  {artist.popularity > 80 ? (
                    <StarRateIcon
                      fontSize="large"
                      htmlColor="rgb(187, 186, 186)"
                    />
                  ) : (
                    <></>
                  )}
                </Grid>
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

export default ArtistSearch;
