import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "./main.css"
import { faHotel } from "@fortawesome/free-solid-svg-icons"

function Main() {
  return (
    <div className="mainContainer">
        <p>The most beautiful hotel on the web</p>
        <h1>Welcome to BooleanHotel</h1>
        <FontAwesomeIcon className="hotelIcon" icon={faHotel}/>
    </div>
  )
}

export default Main