import React, { useEffect, useState } from "react";
import axios from "axios";

const podcastEndpoint = "	https://api.spotify.com/v1/me/episodes";

const GetPodcast = () => {
  const [token, setToken] = useState("");
  const [data, setData] = useState({});

  useEffect(() => {
    if (localStorage.getItem("accessToken")) {
      setToken(localStorage.getItem("accessToken"));
    }
  }, []);

  const handleGetPodcasts = () => {
    axios
      .get(podcastEndpoint, {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((response) => {
        setData(response.data);
      })
      .catch((err) => {
        console.error("there was an error fetching podcasts", err);
      });   
  };
  
  return (
    <>
      <button onClick={handleGetPodcasts}>Get Podcasts</button>
      {data?.items ? data.items.map((item) => <p>{item.name}</p>) : null}
    </>
  );
};

export default GetPodcast;
