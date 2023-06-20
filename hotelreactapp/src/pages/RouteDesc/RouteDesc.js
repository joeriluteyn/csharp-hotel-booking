import "./routeDesc.css"
import Navbar from '../../components/navbar/Navbar'
import Header from "../Home/Header"

function RouteDesc() {
  return (
    <div>
        <Navbar/>
        <Header />
        <div className='routeDescContainer'>
          <div className="routeDescItemContainer">
        <h2>How to get there</h2>
        <h3>By car</h3>
        <p>Curabitur sit amet molestie leo. Quisque luctus sem eu maximus commodo. Proin varius mattis libero, a accumsan nisl dictum non. Ut in venenatis ligula. Etiam ultricies viverra dapibus. Nullam ac dolor diam. Proin placerat odio nec ipsum sagittis gravida. Cras ut ultricies mauris.</p>
        <h3>With public transport</h3>
        <p>Pellentesque id nibh magna. Phasellus in pulvinar neque. Ut eget ultricies risus. Cras nec rutrum mauris. Integer sed leo elit. Aliquam vitae blandit velit, non dapibus massa. Curabitur nec semper velit. Curabitur nec placerat lectus, eu tempus ante. Cras sem sapien, consectetur sed lacus at, volutpat dictum nulla.</p>
        </div>
        </div>
    </div>
  )
}

export default RouteDesc