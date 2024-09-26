import React from "react";

function Story({ story }) {
    return (
      <div className="card">
        <h2>{story.title}</h2>
        <p>{story.pubDate}</p>
        <p><strong>Author:</strong> {story.creator && story.creator.join(", ")}</p>
        <p>{story.description}</p>
        <a href={story.link} target="_blank" rel="noopener noreferrer">
          Read more
        </a>
        <div>
          <strong>Keywords:</strong>
          <ul>
            {story.keywords && story.keywords.map((keyword, index) => (
              <li key={index}>{keyword}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
