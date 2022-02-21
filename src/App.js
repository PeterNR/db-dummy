import logo from './logo.svg';
import './App.css';
import ArticleList from './components/ArticleList';
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Dagbladet_logo.svg/326px-Dagbladet_logo.svg.png"  alt="logo" />
      </header>
      <Home/>
    </div>
  );
}

export default App;
