import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Navbar from "../../components/navbar/Navbar"
import Header from "../Home/Header"
import "./booking.css"
import { faCalendarDays, faPerson } from "@fortawesome/free-solid-svg-icons"
import { DateRange } from 'react-date-range';
import { useState } from "react"
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file

function Booking() {
    const [date, setDate] = useState([
        {
          startDate: new Date(),
          endDate: new Date(),
          key: 'selection'
        }
      ]);
  return (
    <div>
        <Navbar />
        <Header />
        <div className="bookingContainer">
            <div className="searchBar">
                <div className="searchItem">
                    <FontAwesomeIcon icon={faCalendarDays} className="searchIcon"/>
                    <span className="searchText">date to date</span>
                    <DateRange
                        editableDateInputs={true}
                        onChange={item => setDate([item.selection])}
                        moveRangeOnFirstSelection={false}
                        ranges={date}
                        className="date"
/>
                </div>

                <div className="searchItem">
                    <FontAwesomeIcon icon={faPerson} className="searchIcon"/>
                    <span className="searchText">2 adults 2 children 1 room</span>
                </div>

                <div className="searchItem">
                    <button className="searchButton">search</button>
                </div>
                

            </div>
        </div>
    </div>
  )
}

export default Booking