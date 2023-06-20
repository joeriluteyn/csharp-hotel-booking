import Navbar from "../../components/navbar/Navbar"
import Header from "../Home/Header"
import "./rooms.css"

function Rooms() {
  return (
    <div>
      <Navbar />
      <Header />
      <main className="rooms">
        <h2>Types of rooms</h2>

        <p>1 person room</p>
        <p>2 person room</p>
        <p>3 person room</p>


      </main>
    </div>
  )
}

export default Rooms