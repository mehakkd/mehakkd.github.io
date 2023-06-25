import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Welcome to Mehak's Website!
        </p>
        <p>Hi, I'm Mehak, and this is a site of my personal projects so far.</p>
        <a
          className="App-link"
          href="https://quotes-kohl.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Quotes Website: A Randomized Collection of Quotes
        </a>
        <a
          className="App-link"
          href="https://expo.dev/@mehakkd/voluntime"
          target="_blank"
          rel="noopener noreferrer"
        >
          Voluntime: A service opportunities tracker based on location
        </a>
        <a
          className="App-link"
          href="https://github.com/mehakkd/java_wordle"
          target="_blank"
          rel="noopener noreferrer"
        >
          Mehak's Wordle: A Wordle Game in Java
        </a>
      </header>
    </div>
  );
}

export default App;
