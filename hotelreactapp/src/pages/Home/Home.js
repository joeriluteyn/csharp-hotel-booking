import Header from "./Header"
import Navbar from "../../components/navbar/Navbar"
import Main from "./Main"

function Home(){
    return (
       <div>
        <Navbar />
        <Header />
        <Main />
       </div>
    )
}

export default Home