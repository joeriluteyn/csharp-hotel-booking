import { useEffect, useState } from 'react';
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import Navbar from '../../components/navbar/Navbar'
import './account.css'
import { useParams } from 'react-router-dom';
import Booking from '../Booking/Booking';

function Account() {
    const params = useParams()
    const [users, setUsers] = useState([]);
    const [bookings, setBookings] = useState([])
    const [user, setUser] = useState()
    const [loaded, setLoaded] = useState(false)
    const [bookingArray, setBookingArray] = useState([])

    useEffect(function () {
        fetch("https://localhost:7122/customers")
        
          .then((res) => res.json())
          .then((data) => setUsers(data));
          
          
      }, []);

      

      useEffect(function () {
        fetch("https://localhost:7122/bookings")
          .then((res) => res.json())
          .then((data) => setBookings(data));
          
      }, []);

      useEffect(() => {
        getUser()
        // getBookings()
 }, );
      
      function getUser(){
        for (let i = 0; i < users.length; i++) {
            if (users[i].name === params.userName){
                setUser(users[i])
                
            }
            
        }
      }

      

      function getBookings(){

        if(bookingArray.length === 0){
            for (let i = 0; i < bookings.length; i++) {
                if(bookings[i].customerId === user.id){
                    bookingArray.push(bookings[i])
                    
                }
                
            }
           
            
        }
        setLoaded(true)
        console.log(bookingArray)
        
      }
      
      
      

  return (
    <div>
        
        <Navbar />
        <Header />
        <div className='accountContainer'>
            <div className='accountItems'>
                <p>Account Name: {params.userName}</p>
                {}
                <p>Email: {user !== undefined && user.email}</p>
                <p>Phone: {user !== undefined && user.phone}</p>
                <p>Current bookings:</p>
                <button onClick={getBookings} >See Bookings</button>
                {loaded === true && <table>
                <thead>
                    <tr>
                        <td>Start Date</td>
                        <td>End Date</td>
                        <td>Amount of people</td>
                        <td>Rooms</td>

                        
                    </tr>
                </thead>
                <tbody>
                    {bookingArray.map(booking => (
                        <tr key={booking.id}>
                            <td>
                                {booking.startDate}
                            </td>
                            <td>
                                {booking.endDate}
                            </td>
                            <td>
                                {booking.amountOfPeople}  
                            </td>
                            <td>
                                {booking.room}
                            </td>
                            
                        </tr>
                    ))}
                </tbody>
            </table>
              
                }
            </div>
            

        </div>
        <Footer />
    </div>
  )
}

export default Account