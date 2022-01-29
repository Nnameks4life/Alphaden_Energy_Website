import {BrowserRouter, Route, Routes} from 'react-router-dom';
// import './App.css';
import Home from './pages/home/Home';
import Nav from './components/nav/Nav';
import Aboutus from './pages/aboutus/Aboutus';
import Ourservices from './pages/ourservices/Ourservices';
import Hseqpolicy from './pages/hseqpolicy/Hseqpolicy';
import Projects from './pages/projects/Projects';
import Clientele from './pages/clientele/Clientele';
import Contactus from './pages/contactus/Contactus';
import Footer from './footer/Footer';
import Homeslider from './components/slider/Homeslider';
import Engineering from './pages/ourservices/engineering/Engineering';



function App() {
  return (
    <BrowserRouter>
    <Nav/>
      <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/nav' element={<Nav/>} />
      <Route path='/aboutus' element={<Aboutus/>} />
      <Route path='/ourservices' element={<Ourservices/>} />
      <Route path='/hseqpolicy' element={<Hseqpolicy/>} />
      <Route path='/projects' element={<Projects/>} />
      <Route path='/clientele' element={<Clientele/>} />
      <Route path='/contactus' element={<Contactus/>} />
      <Route path='/homeslider' element={<Homeslider/>}/>
      <Route path='/engineering' element = {<Engineering/>} />
      </Routes>
      <Footer/>
   </BrowserRouter>
  );
}

export default App;
