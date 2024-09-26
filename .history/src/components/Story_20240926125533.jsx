import React from "react";

function Story({ story }) {

    function renderImage() {
        if (!story.image_url || story.image_url === "null") {
            return (
                <img src="https://placehold.co/600x400/000000/FFF" alt="placeholder" height={50} width={100} />
            );
        }
        return <img src={story.image_url} alt={story.title} height={50} width={100} />
    }



    return (
        <div className="card">
            <div className="top">
                {renderImage()}
                <h2>{story.title}</h2>
            </div>

            <p>{story.pubDate}</p>
            <p><strong>By:</strong> {story.creator}</p>
            <p>{story.description}</p>
            <a href={story.link}>
                Read more
            </a>
          
        </div>
    );
}

export default Story;