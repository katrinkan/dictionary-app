import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <main>
          <Dictionary defaultKeyword="hello" />
        </main>
      </div>
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
  );
}

export default App;
