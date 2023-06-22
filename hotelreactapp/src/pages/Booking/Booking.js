import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Navbar from "../../components/navbar/Navbar"
import Header from "../../components/Header/Header"
import "./booking.css"
import { faCalendarDays, faPerson } from "@fortawesome/free-solid-svg-icons"
import { DateRange } from 'react-date-range';
import { useEffect, useState } from "react"
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { format } from "date-fns"
import { useParams } from "react-router-dom"


 const initialState = {
    Startdate: "",
    EndDate: "",
    AmountOfPeople: 1,
    CustomerID: 0,
    Room: 0
 }
function Booking({})  {
    const params = useParams()
    const [openDate, setOpenDate] = useState(false)
    const [date, setDate] = useState([
        {
          startDate: new Date(),
          endDate: new Date(),
          key: 'selection'
        }
      ]);
    const [openPeople, setOpenPeople] = useState(false)
    const [people, setPeople] = useState({
        adult: 1,
        children: 0,
        room: 1
    })
    const [bookings, setBookings] = useState([])
    const [formData, setFormData] = useState(initialState)
    const [users, setUsers] = useState([]);
    const [bookingMessage, setBookingMessage] =useState()
    


    useEffect(function () {
        fetch("https://localhost:7122/bookings")
          .then((res) => res.json())
          .then((data) => setBookings(data));
      }, []);

      // useEffect(function () {
      //   fetch("https://localhost:7122/rooms")
      //     .then((res) => res.json())
      //     .then((data) => setRooms(data));
      // }, []);
    
    useEffect(function () {
      fetch("https://localhost:7122/customers")
        .then((res) => res.json())
        .then((data) => setUsers(data));
    }, []);
    
    const handleCounter = (name, operation) =>{
        setPeople(prev =>{return {
            ...prev, [name]: operation === "increase" ? people[name] +1 : people[name] -1
        }})
    } 

    const handleClick = () => {
        let userId = 0
        for (let i = 0; i < users.length; i++) {
          if(users[i].name === params.userName){
            userId = users[i].id
          }
        }
        let peopleCalculation = people.adult + people.children
        const maxPeople = people.room * 3
        if (peopleCalculation <= maxPeople){
          for (let j = 0; j < bookings.length; j++) {
            
            if(bookings[j].startDate !== `${format(date[0].startDate, "dd/MM/yyyy")}`){

            }
          }
        }

        setFormData({...formData, 
          Room: people.room, 
          Startdate: `${format(date[0].startDate, "dd/MM/yyyy")}`,
          EndDate: `${format(date[0].endDate, "dd/MM/yyyy")}`,
          CustomerID: userId,
          AmountOfPeople: peopleCalculation
        })
        setOpenDate(false)        
        setOpenPeople(false)
        setBookingMessage("")
    }
 
    // function getDates (startDate, endDate) {
    //   const dates = []
    //   let currentDate = startDate
    //   const addDays = function (days) {
    //     const date = new Date(this.valueOf())
    //     date.setDate(date.getDate() + days)
    //     return date
    //   }
    //   while (currentDate <= endDate) {
    //     dates.push(currentDate)
    //     currentDate = addDays.call(currentDate, 1)
    //   }
    //   return dates
    // }

    // const checkAvailabilty = () => {
    //   const currentBookingDays = getDates(new Date(`${format(date[0].startDate, "yyyy, MM , dd")}`), new Date(`${format(date[0].endDate, "yyyy, MM , dd")}`))
    //   for (let i = 0; i < bookings.length; i++) {
    //     const bookingStartDate = new Date(`${bookings[i].startDate}`)
    //     const bookingEndDate = new Date(`${bookings[i].endDate}`)
    //     const bookingDays = getDates(new Date(`${format(bookingStartDate, "yyyy, MM , dd")}`), new Date(`${format(bookingEndDate, "yyyy, MM , dd")}`))
    //     console.log(bookingDays)
    //   }
    // }
    
    const handleBooking = async (e) => {
      e.preventDefault()
      await fetch("https://localhost:7122/bookings", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });
        setBookingMessage("Succes!")
       };
    
  
    
    

  return (
    <div>
      <Navbar />
      <Header />
      <div className="bookingContainer">
        <div className="searchBar">
          <div className="searchItem">
            <FontAwesomeIcon icon={faCalendarDays} className="searchIcon" />
            <span onClick={() => setOpenDate(!openDate)}  className="searchText" >
            {`${format(date[0].startDate, "dd/MM/yyyy")} to ${format(date[0].endDate, "dd/MM/yyyy" )}`}
            </span>

            {openDate && (
              <DateRange
                editableDateInputs={true}
                onChange={(item) => setDate([item.selection])}
                moveRangeOnFirstSelection={false}
                ranges={date}
                className="date"
              />
            )}
          </div>

          <div className="searchItem">
            <FontAwesomeIcon icon={faPerson} className="searchIcon" />
            <span onClick={()=> setOpenPeople(!openPeople)} className="searchText">{`${people.adult} adult - ${people.children} children - ${people.room} room`}</span>
            {openPeople && <div className="people">

              <div className="peopleItem">
                <span className="peopleText">Adult</span>
                <div className="peopleCounter">
                  <button disabled={people.adult <= 1} className="peopleConterButton" onClick={() => handleCounter("adult", "decrease")}>-</button>
                  <span className="peopleCounterNumber">{people.adult}</span>
                  <button className="peopleConterButton" onClick={() => handleCounter("adult", "increase")}>+</button>
                </div>
              </div>

              <div className="peopleItem">
                <span className="peopleText">Children</span>
                <div className="peopleCounter">
                  <button disabled={people.children <= 0} className="peopleConterButton" onClick={() => handleCounter("children", "decrease")}>-</button>
                  <span className="peopleCounterNumber">{people.children}</span>
                  <button className="peopleConterButton" onClick={() => handleCounter("children", "increase")}>+</button>
                </div>
              </div>

              <div className="peopleItem">
                <span className="peopleText">Amount of Rooms</span>
                <div className="peopleCounter">
                  <button disabled={people.room <= 1} className="peopleConterButton" onClick={() => handleCounter("room", "decrease")}>-</button>
                  <span className="peopleCounterNumber">{people.room}</span>
                  <button className="peopleConterButton" onClick={() => handleCounter("room", "increase")}>+</button>
                </div>
              </div>
            </div>}
          </div>

          <div className="searchItem">
            <button onClick={handleClick} className="searchButton">Make Booking</button>
          </div>
        </div>
        
        </div>
        <div className="resultsContainer">
              
            {formData.CustomerID !== 0 &&
            <div className="results">
              <h2>Your booking:</h2>
            <p>Starting Date: {formData.Startdate}</p>
            <p>End Date: {formData.EndDate}</p>
            <p>Amount of people: {formData.AmountOfPeople}</p>
            <p>Rooms :{formData.Room}</p>
            <p className="bookingLine">Everything correct? Make your Booking!</p>
            <button onClick={handleBooking} className="bookingButton">Book!</button>
            <h2 className="bookingSucces">{bookingMessage}</h2>
            </div>}
        </div>
        
          
        
    </div>
  );
}

export default Booking