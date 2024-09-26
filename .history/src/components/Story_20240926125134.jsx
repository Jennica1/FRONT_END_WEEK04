import React from "react";

function Story({ story }) {

    function renderImage() {
        if (!story.image_url || story.image_url === "null") {
            return (
                <img src="https://placehold.co/600x400/000000/FFF" alt="placeholder" height={100} width={150} />
            );
        }
        return <img src={story.image_url} alt={story.title} height={100} width={150} />
    }



    return (
        <div className="card">
            <div>
            {renderImage()}
            <h2>{story.title}</h2>
            </div>
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