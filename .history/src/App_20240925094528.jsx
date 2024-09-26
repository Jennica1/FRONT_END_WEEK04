import React from 'react';
import news_feed from './sample_news_stories.json';
import Story from './components/Story'

function App() {

  // Get stories from news feed
  const stories = news_feed.results;

  return (
    <div className="App">
      {stories.map((story, index) => (
        <Story key={index} story={story} />
      ))}
    </div>
  );
}

export default App;
