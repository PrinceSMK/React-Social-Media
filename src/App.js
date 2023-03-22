import './App.css';
import First from './components/First';
import { Route , Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">
          {/* <All /> */}
      <Routes>
         <Route path='/' element={<First />} /> 

      </Routes>
    </div>
  );
}

export default App;
