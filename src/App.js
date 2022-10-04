import './App.css';
import Routers from './Routes/Routers';
import Navbar from './components/navbar/Navbar';
import Footer from "./components/footer/Footer";


function App() {
  return (
    <div>
      <Navbar/>
        {/* All Website Routers - URLs */}
        <Routers/>
      <Footer/>
    </div>
  );
}

export default App;
