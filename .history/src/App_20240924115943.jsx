import React from 'react';
import news_feed from './sample_news_stories.json';
import Story from './components/Story'

function App() {

  // Get stories from news feed
  const stories = news_feed.results;

  function NewsStory(results) {
    return (
      <>
      {news_feed.map((news, index) => (
        <Story key={index} artist={artist} />
      ))}
      </>
    )
  }

  return (
    <div className="App">
    </div>
  );
}

export default App;
