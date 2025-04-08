// App.js
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import Playground from './Playground'
import About from './About'
import Service from './Service';
import Contact from './Contact';
import NavBar from './NavBar';
import Footer from './Footer';


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

         <Footer />
      </div>
   );
};

export default App;