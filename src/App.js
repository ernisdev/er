import './App.scss';
import Header from './compannent/Header';
import Section1 from './compannent/Section1';
import Section2 from './compannent/Section2';
import Section3 from './compannent/Section3';
import Section4 from './compannent/Section4'
import Footer from './compannent/Footer';
import Section5 from './compannent/Section5';
import Section6 from './compannent/Section6';
import {Route , Routes} from 'react-router-dom'




function App() {
  return (
    <div className="App">
           <Header/>
           <Routes>
            <Route path='/secto' element={<Section2/>}/>
           </Routes>
            <Section1/>
            <Section2/>
            <Section3/>
            <Section4/>
            <Section5/>
            <Section6/>
           <Footer/>
    </div>
  );
}

export default App;
