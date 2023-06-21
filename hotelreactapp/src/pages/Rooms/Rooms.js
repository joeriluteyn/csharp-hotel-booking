import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/Header/Header";
import "./rooms.css";
import Footer from "../../components/Footer/Footer";
import room1 from "../../images/einzelzimmer-standard-insel-hotel-bonn-2524 (1).jpg";
import room3 from "../../images/07VithfaxRyfgh3HTEWi_original.jpg"
import room2 from "../../images/bilderberg_0156_reguliere_kamer_twin_bed.jpg__1280x720_q70_crop_subsampling-2.jpg"

function Rooms() {
  return (
    <div>
      <Navbar />
      <Header />
      <main className="roomContainer">
        <div className="rooms">
          <div className="RoomItems">
            <h2>Types of rooms</h2>

            <p>1 person room</p>
            <div className="roomItem">
              
              <img className="roomImage" src={room1} alt="room1" />
              
            </div>
            <p>2 person room</p>
            <div className="roomItem">
              
              <img className="roomImage" src={room2} alt="room1" />
              
            </div>
            <p>3 person room</p>
            <div className="roomItem">
              
              <img className="roomImage" src={room3} alt="room1" />
              
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Rooms;
