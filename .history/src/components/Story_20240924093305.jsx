import React from "react";

function ArtistDetails({ news_feed }) {
    return (
      <div className="card">
        <img src={news_feed.title} width={100} height={100}className="photo"/>
        <div className="information">
          <h2>{artist.name}</h2>
          <p>{artist.country}</p>
          <p>{artist.years_active}</p>
        </div>
      </div>
    );
  }
  
  export default ArtistDetails;