import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header>
          <h1>Dictionary</h1>
        </header>
        <main>
          <Dictionary />
        </main>
        <footer className="App-footer">
          This project was coded by Katrin Kanape and is{" "}
          <a
            href="https://github.com/katrinkan/dictionary-app"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on Github.
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
