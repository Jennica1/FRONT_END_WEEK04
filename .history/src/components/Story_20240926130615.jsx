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

    function Tile({ name }) {
        // color: rgb(65, 70, 100)
        const color = `rgb(${random(255)}, ${random(255)}, ${random(255)})`
    
       function handleDelete(e) {
        if (e.target == e.currentTarget ) {
          return;
        }
        //if its not span element 
        if (e.target.tagName !== 'SPAN') {
          return;
        }
        e.currentTarget.remove();
       }
    
        // function handleClick(e) {
        //   console.log(e.target.textContent);
        // }
    
        // function handleTileClick() {
        //   console.log('A button was clicked');
        // }
    
        /**onClick={handleTileClick} WAS IN THE BUTTON */
        return (
          <div className="tile" style={{ backgroundColor: color }} onClick={handleDelete}>
            <p>{name}</p>
            <span onClick={handleDelete}>x</span>
          </div>
        )
    
      }
      
}

export default Story;