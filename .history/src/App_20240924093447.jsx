import news_feed from './sample_news_stories.json';
import Story from './components/Story'
function App() {

  // Get stories from news feed
  const stories = news_feed.results;

  return (
    <div className="App">
      {artists.map((artist, index) => (
        <Story key={index} artist={artist} />
      ))}
      
    </div>
  );
}

export default App;
