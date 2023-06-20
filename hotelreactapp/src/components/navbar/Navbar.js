import { useNavigate, useParams } from "react-router-dom"
import "./navbar.css"

function Navbar() {
const navigate = useNavigate()
const params = useParams()
if(params.userName !== undefined){
return (
    <div className="navbar">
        <div className="navContainer">
            <a href={"/" + params.userName} className="logo">Joeribooking</a>
            <div className="navItems">
            
            <span>Welcome {params.userName}</span>
            <a href="/"><button  className="navButton">Logout</button></a>

            


            </div>
        </div>
    </div>
  )
}
  return (
    <div className="navbar">
        <div className="navContainer">
        <a href="/" className="logo">Joeribooking</a>
            <div className="navItems">
            
            <a href="/register"><button className="navButton">Register</button></a>
            
            <a href="/login"><button  className="navButton">Login</button></a>
            


            </div>
        </div>
    </div>
  )
}

export default Navbar