// App.js
import { Routes, Route } from 'react-router-dom';
import Home from './component/Home';
import Resume from './component/Playground'
import About from './component/About'
import Service from './component/Service';
import Contact from './component/Contact';
import NavBar from './component/NavBar';
import Footer from './component/Footer';
import Playground from './component/Playground';

const App = () => {
   return (
      <div>


         <NavBar />
         <Routes >
            <Route path="/" element={<Home />} />
            <Route path="/Playground" element={<Playground />} />
            <Route path="/about" element={<About />} />

            <Route path="/Contact" element={<Contact />} />
            <Route path="/Service" element={<Service />} />
         </Routes>

         {/* <Footer /> */}
      </div>
   );
};

export default App;