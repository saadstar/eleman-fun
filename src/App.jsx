import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/Home/Home';
import AboutUs from './components/AboutUs/AboutUs';
import Contact from './components/Contact/Contact';
import Villas from './components/Villa/Villas';
// import SingleVilla from './components/Villa/SingleVilla';
import TermsAndConditions from './components/TermsAndConditions/TermsAndConditions';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import './App.css';
import { Portoflio } from "./components/Protoflio/Portoflio";

const App = () => {
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/aboutus' element={<AboutUs/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/protoflio' element={<Portoflio/>}/>
          <Route path='/termsandconditions' element={<TermsAndConditions/>}/>
          <Route path='/villas' element={<Villas/>}/>
          {/* <Route path='/villa/:id' element={<SingleVilla/>}/> */}
        </Routes>
        <Footer/>
      </Router>
    </>
  )
}

export default App
