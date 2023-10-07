import logo from './logo.svg';
import './App.css';
import { timePastSince, timeRemaining } from './functions';

function App() {

  const date = '2023-10-06T05:43:32.743Z';
  const date2 = '2023-10-06T06:12:11.771Z';

  const date3 =  new Date(new Date(new Date()).setFullYear(new Date(new Date()).getFullYear() + 10))

  return (
    <div className="App">
      {/* <h1>{new Date(new Date(date).setHours(new Date(date).getHours() + 0)).toLocaleTimeString()}</h1> */}
      <h1>{timeRemaining(date3)}</h1>
      {/* <h1>{new Date().toISOString()}</h1> */}
    </div>
  );
}

export default App;
