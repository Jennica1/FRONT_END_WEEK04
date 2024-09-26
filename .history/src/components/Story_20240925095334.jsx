import React from "react";

function Story({ story }) {
    return (
      <div className="card">
        <img src={story.image_url} height={600} width={600}/>
        <h2>{story.title}</h2>
        <p>{story.pubDate}</p>
        <p><strong>Author:</strong> {story.creator}</p>
        <p>{story.description}</p>
        <a href={story.link}>
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

  export default Story;