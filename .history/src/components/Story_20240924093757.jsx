import React from "react";

function ArtistDetails({ news_feed }) {
    return (
      <div className="card">
       
        <div className="information">
          <h2>{news_feed.title}</h2>
          <p>{news_feed.link}</p>
          <p>{artist.years_active}</p>
        </div>
      </div>
    );
  }
  
  export default ArtistDetails;