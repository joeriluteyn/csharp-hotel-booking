import "./location.css"
import Navbar from '../../components/navbar/Navbar'
import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBellConcierge } from "@fortawesome/free-solid-svg-icons"

function Location() {
  return (
    <div>
        <Navbar/>
        <Header />
        
        
    <div className="locationContainer">
        
        <div className="locationItemContainer">
        <h2>About the location</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tempus purus vitae justo feugiat, dictum faucibus justo ultrices. Phasellus lacus sem, gravida id justo eget, lacinia vestibulum elit. Vestibulum varius tincidunt velit, nec lobortis urna laoreet in. Aenean ultrices pretium tortor non scelerisque. Nulla vestibulum porttitor massa, at ornare enim vestibulum non. Aliquam sollicitudin vel tellus ac dictum. Nunc non risus eget leo sollicitudin mattis. Morbi dapibus luctus fermentum. Ut sed rhoncus lacus. Curabitur ut tellus tempus, vehicula massa id, cursus augue. Duis id tellus nisl. Integer a fermentum neque, non convallis justo. In condimentum nisl eu mi ullamcorper, sit amet scelerisque libero feugiat. Nulla posuere tortor vel sodales dictum.</p>
        </div>
    </div>
    <Footer />
    </div>
  )
}

export default Location