import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Recharts/Home/Home';
import Dashboard from './Components/Recharts/Dashboard';


function App() {
  return (
    <div className="App">
      <Home></Home>
     <Dashboard></Dashboard>
    </div>
  );
}

export default App;
