import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from './pages/Home/Home';
import Rooms from './pages/Rooms/Rooms';
import Room from './pages/Room/Room';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import RouteDesc from './pages/RouteDesc/RouteDesc';
import Location from './pages/Location/Location';
import { useState } from 'react';
import Booking from './pages/Booking/Booking';


function App() {
   return (
    <>
    
    <main>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/login' element={<Login  />}/>
        <Route path='/register' element={<Register />}/>
        <Route path='/:userName' element={<Home />}/>
        <Route path='/rooms:id' element={<Room />}/>

        <Route path='/rooms' element={<Rooms />}/>
        <Route path='/:userName/rooms' element={<Rooms />}/>


        <Route path='/route' element={<RouteDesc />}/>
        <Route path='/:userName/route' element={<RouteDesc />}/>


        <Route path='/location' element={<Location />}/>
        <Route path=':userName/location' element={<Location />}/>

        <Route path='/booking' element={<Booking />}/>
        <Route path=':userName/booking' element={<Booking />}/>



        


      </Routes>
    </BrowserRouter>
    </main>
    </>
  );
}

export default App;
