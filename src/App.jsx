// App.js
import { Routes, Route } from 'react-router-dom';
import Home from './component/Home';
import Resume from'./component/Resume'
import About from './component/About'
import Service from './component/Service';
import Contact from './component/Contact';
import NavBar from './component/NavBar';

 
const App = () => {
   return (
      <div>


      <NavBar/>
         <Routes >
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Resume />} />
            <Route path="/about" element={<About />} />

            <Route path="/Contact" element={<Contact/>} />
            <Route path="/Service" element={<Service />} />
         </Routes>

         
      </div>
   );
};
 
export default App;