import './App.css';
import {Routes, Route} from "react-router-dom";
import Navbar from './componenets/Navbar/Navbar';
import Footer from './componenets/Footer/Footer';
import Home from './pages/Home/Home';
import Logements from './pages/Logement/Logements.jsx';
import About from './pages/About/About'; 
import Error from './pages/Error/Error';

function App() {
  return (
    <div className="App">
    <Navbar/>
     <Routes>
      <Route path="/" element={<Home />} />  
      <Route path="/about" element={<About />} /> 
      <Route path="/logements/:id" element={<Logements />} />  
      <Route path="*" element={<Error />} />  

     </Routes>
     <Footer/>
    </div>
  );
}

export default App;
