import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Recharts/Home/Home';
import Dashboard from './Components/Recharts/Dashboard';
import Menu from './Components/Menu/Menu';
import Reviews from './Components/Allreviews/Reviews';
import NotFound from './Components/404 not found/NotFound';


function App() {
  return (
    <div className="App">
      <Menu></Menu>
     <Routes>
      <Route path='*' element={<NotFound></NotFound>}></Route>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='Dashboard' element={<Dashboard></Dashboard>}></Route>
      <Route path='reviews' element={<Reviews></Reviews>}></Route>
     </Routes>
    </div>
  );
}

export default App;
