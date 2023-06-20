import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "./header.css"
import { faBed, faLocation, faLocationDot, faRoute } from "@fortawesome/free-solid-svg-icons"

function Header() {
  return (
    <div className="header">
        <div className="headerContainer">
        <div className="headerList">
            <div className="headerListItem">
            <FontAwesomeIcon icon={faBed} />
            <span>Rooms</span>
            </div>

            <div className="headerListItem">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>Location</span>
            </div>

            <div className="headerListItem">
            <FontAwesomeIcon icon={faRoute} />
            <span>Route</span>
            </div>
            
            
        </div>
        </div>
    </div>
  )
}

export default Header