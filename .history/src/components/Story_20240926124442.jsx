import React from "react";

function Story({ story }) {

    function renderImage() {
        if (!story.image_url || story.image_url === "null") {
            return (
                <img src="https://placehold.co/600x400/000000/FFF" alt="placeholder" height={200} width={300} />
            );
        }
        return <img src={story.image_url} alt={story.title} height={200} width={300} />
    }

    function Tile({ name }) {

        function handleDelete(e) {
            if (e.target == e.currentTarget) {
                return;
            }
            //if its not span element 
            if (e.target.tagName !== 'SPAN') {
                return;
            }
            e.currentTarget.remove();
        }

        return (
            <div className="card">
                {renderImage()}
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

    
            <div className="tile" style={{ backgroundColor: color }} onClick={handleDelete}>
                <p>hi</p>
                <span onClick={handleDelete}>x</span>
            </div>
      

    }
};

export default Story;