import axios from "axios";
import * as constFile from "./Appconsts";
export const loginWithSpotify = () => {
  return axios
    .post(
      `https://accounts.spotify.com/api/token`,
      {
        // grant_type: "",
        client_id: constFile.SPOTIFY_CLIENT_ID,
        client_secret: constFile.SPOTIFY_CLIENT_SECRET,
        grant_type: "client_credentials",
      },
      {
        headers: {
          "Content-Type": " application/x-www-form-urlencoded",
        },
      }
    )
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return err.response.data;
    });
};
export const searchArtist = (search) => {
  const token = localStorage.getItem("access_token");
  return axios
    .get(
      `https://api.spotify.com/v1/search?q=${search}&type=artist`,

      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        // params: { q: search, type: "album" },
      }
    )
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return err.response.data;
    });
};
export const getAlbums = (id) => {
  const token = localStorage.getItem("access_token");
  return axios
    .get(
      `https://api.spotify.com/v1/artists/${id}/albums`,

      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        // params: { q: search, type: "album" },
      }
    )
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return err.response.data;
    });
};
