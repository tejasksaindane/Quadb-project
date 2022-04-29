import React, { useState, useEffect } from "react";
import Axios from "axios";
import "./styles/About.css";

const About = () => {
  const [details, setDetails] = useState({});
  const fetchDetails = async () => {
    const { data } = await Axios.get(
      "https://api.tvmaze.com/search/shows?q=all"
    );
    console.log(data);
    setDetails(data);
  };

  useEffect(() => {
    fetchDetails();
  }, []);
  return (
    <div className="about">
      <div className="top">
        <div className="About-img">
          <img src={details[0]?.show?.image?.medium} alt="" />
        </div>
      </div>
      <div className="about-typo">
        <div className="about-heading">
          <center>
            <h1>About, {details[0]?.show?.name}</h1>
          </center>
        </div>
        <div className="about-para">
          <h3>Premiered on : {details[0]?.show?.premiered}</h3>
          <h4>Watch daily on : {details[0]?.show?.network?.name}</h4>
          <p>{details[0]?.show?.summary}</p>
        </div>
      </div>
    </div>
  );
};

export default About;
