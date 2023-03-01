import {Routes, Route, Navigate} from 'react-router-dom'
import Weather from './components/Weather';


function App() {
  return (
    <div class="flex items-center justify-center min-h-screen w-screen font-shrikhand bg-[url('./images/background_image.jpg')] bg-cover">
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
        <Route path = '/' element = {<Weather />} />
        <Route path = '*' element = {<Navigate to = '/' />} />
      </Routes>
    </div>
  );
}

export default App;
