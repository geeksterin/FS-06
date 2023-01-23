import './App.css';
import ReactDOM from 'react-dom/client';
import JSX from './components/JSX';
import JSXQues from './components/JSXQues';
import EventListeners from './components/EventListeners';

function App() {
  return (
    <div className="App" id='app'>
        {/* <JSX></JSX>
        <JSXQues></JSXQues> */}
        <EventListeners />
    </div>
  );
}

export default App;
