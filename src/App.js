// import React from 'react';
// import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

// import Home from './components/Home';
// import About from './components/About';
// import './App.css';
// import Header from './components/Header';
// import Third from './components/Third';
// import SignUp from './components/Signup';
// import Login from './components/Login';
// import Footer from './components/Footer';
// import Next from './components/Next';
// import Service from './components/Service';

// function App() {
//   return (
//     <Router>
//      {/* <Header/> */}
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/Third" element={<Third />} />
//           <Route path="/SignUp" element={<SignUp />} />
//           <Route path="/Next" element={<Next />} />
//           <Route path="/Login" element={<Login />} />
//           <Route path="/Service" element={<Service />} />
//         </Routes>
//         <Footer/>
//       </Router>
//   );
// }

// export default App;
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';

import Home from './components/Home';
import About from './components/About';
import Third from './components/Third';
import SignUp from './components/Signup';
import Login from './components/Login';
import Footer from './components/Footer';
import Next from './components/Next';
import Service from './components/Service';
import Loader from './components/Loader'; // Import Loader
import Allshops from './components/Allshops';
import IndividualList from './components/IndividualList';
import MyQuries from './components/MyQuries';
import Contact from './components/Contact';
import PrivacyPolicy from './components/PrivacyPolicy';
import Caraousal from './components/Caraousal';
import Below from './components/Below';
import Heroabout from './components/Heroabout';
import MultiIncrementor from './components/NumberIncrementer';
// Loader handler component
const LoaderHandler = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const location = useLocation(); // Detect route change

  useEffect(() => {
    setLoading(true); // Show loader on route change
    const timer = setTimeout(() => {
      setLoading(false); // Hide loader after a simulated delay
    }, 2000);
    return () => clearTimeout(timer); // Cleanup the timer
  }, [location]);

  return (
    <>
      {/* {loading && <Loader />} Show loader if loading */}
      {children} {/* Render child components */}
    </>
  );
};

function App() {
  return (
    <>
    <Router>
      <LoaderHandler>
        <Routes>
          <Route path="/Caraousal" element={<Home />} />
          <Route path="/" element={<Caraousal />} />
          <Route path="/about" element={<About />} />
          <Route path="/Third" element={<Third />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/Next" element={<Next />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Service" element={<Service />} />
          <Route path="/Allshops" element={<Allshops />} />
          <Route path="/MyQuries" element={<MyQuries />} />
          <Route path="/IndividualList" element={<IndividualList />} />
          <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
          <Route path="/Below" element={<Below />} />
          <Route path="/Heroabout" element={<Heroabout />} />
          <Route path="/MultiIncrementor" element={<MultiIncrementor />} />
        </Routes>
        <Footer />
      </LoaderHandler>
    </Router>
    
    </>
  );
}

export default App;
