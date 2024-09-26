import React from 'react';
import news_feed from './sample_news_stories.json';
import Story from './components/Story'

function App() {

  // Get stories from news feed
  const stories = news_feed.results;

  return (
    <div className="App">
      {news_feed.map((news_feed, index) => (
        <Story key={index} news_feed={news_feed} />
      ))}
      
    </div>
  );
}

export default App;
