import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from './pages/Home/Home';
import Rooms from './pages/Rooms/Rooms';
import Room from './pages/Room/Room';
import Login from './pages/Login/Login';


function App() {
  return (
    <>
    
    <main>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/login' element={<Login />}/>

        <Route path='/rooms' element={<Rooms />}/>
        <Route path='/rooms:id' element={<Room />}/>


      </Routes>
    </BrowserRouter>
    </main>
    </>
  );
}

export default App;
