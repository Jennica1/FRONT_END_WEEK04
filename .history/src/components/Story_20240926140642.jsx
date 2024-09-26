import React from "react";
import style from '../index.css';

function Story({ story }) {
  function renderImage() {
    if (!story.image_url || story.image_url === "null") {
      return (
        <img
          src="https://placehold.co/600x400/000000/FFF"
          alt="placeholder"
          height={100}
          width={150}
        />
      );
    }
    return <img src={story.image_url} alt={story.title} height={100} width={150} />;
  }

  function handleDelete(e) {
    const card = e.currentTarget.closest(".card");
    if (card) {
      card.remove();
    }
  }

  return (
    <div className="card" >
      <div className="top">
        {renderImage()}
        <h2>{story.title}</h2>
      </div>

      <p>{story.pubDate}</p>
      <p>
        <strong>By:</strong> {story.creator}
      </p>
      <p>{story.description}</p>
      <a href={story.link}>Read more</a>

      <Tile name="Delete" handleDelete={handleDelete} />
    </div>
  );
}

function Tile({ name, handleDelete }) {
  return (
    <div className="tile"  onClick={handleDelete}>
      <span>{name}</span>
    </div>
  );
}


export default Story;
