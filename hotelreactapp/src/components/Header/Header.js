import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "./header.css"
import { faBed, faCalendarDays, faLocation, faLocationDot, faRoute } from "@fortawesome/free-solid-svg-icons"
import { useNavigate, useParams } from "react-router-dom"

function Header() {
  const params = useParams()
  const navigate = useNavigate()
  if(params.userName !== undefined){
    return(
    <div className="header">
        <div className="headerContainer">
        <div className="headerList">
        <a href={"/"+params.userName +"/rooms"} className="headerListItem">
            <FontAwesomeIcon icon={faBed} />
            <span>Rooms</span>
            </a>

            <a href={"/"+params.userName +"/location"} className="headerListItem">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>Location</span>
            </a>

            <a href={"/"+params.userName +"/route"} className="headerListItem">
            <FontAwesomeIcon icon={faRoute} />
            <span>Route</span>
            </a>

            <a href={"/"+params.userName + "/booking"} className="headerListItem">
            <FontAwesomeIcon icon={faCalendarDays} />
            <span>Booking</span>
            </a>

            
            
            
        </div>
        </div>
    </div>
    )
  }
  return (
    <div className="header">
        <div className="headerContainer">
        <div className="headerList">
            <a href="/rooms" className="headerListItem">
            <FontAwesomeIcon icon={faBed} />
            <span>Rooms</span>
            </a>

            <a href="/location" className="headerListItem">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>Location</span>
            </a>

            <a href="/route" className="headerListItem">
            <FontAwesomeIcon icon={faRoute} />
            <span>Route</span>
            </a>
            
            <span className="headerListItem">Log in or register to be able to make a booking </span>
            
        </div>
        </div>
    </div>
  )
}

export default Header