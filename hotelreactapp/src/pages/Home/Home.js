import Footer from "../../components/Footer/Footer"
import Header from "../../components/Header/Header"
import Navbar from "../../components/navbar/Navbar"
import Main from "./Main"

function Home(){
    return (
       <div>
        <Navbar />
        <Header />
        <Main />
        <Footer />
       </div>
    )
}

export default Home