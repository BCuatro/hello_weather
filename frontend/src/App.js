// import './App.css';

import {Routes, Route, Navigate} from 'react-router-dom'
import WeatherDisplay from './components/WeatherDisplay';

function App() {
  return (
    <div class="flex items-center justify-center h-screen">
      {/* <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <Routes>
        <Route path = '/' element = {<WeatherDisplay />} />
        <Route path = '*' element = {<Navigate to = '/' />} />
      </Routes>
    </div>
  );
}

export default App;
