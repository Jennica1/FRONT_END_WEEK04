import React from "react";

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
    <div className="card" }}>
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
    <div className="tile" style={tileStyle} onClick={handleDelete}>
      <span>{name}</span>
    </div>
  );
}

// CSS style for the Tile component
const tileStyle = {
  position: "absolute",
  top: "10px",
  right: "10px",
  backgroundColor: "#f00",
  color: "#fff",
  padding: "5px",
  cursor: "pointer",
  borderRadius: "50%",
  width: "30px",
  height: "30px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontSize: "12px",
  fontWeight: "bold",
};

export default Story;
