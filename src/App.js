import React from "react";
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import Home from './routes/Home';
import Blog from './routes/Blog';
import Contact from './routes/Contact';
import SignIn from './routes/SignIn';
import SignUp from './routes/SignUp';
import AboutUs from './routes/AboutUs';
import OurStory from './routes/OurStory';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/ourstory" element={<OurStory />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
