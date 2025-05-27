import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './Components/Home';
import Contact from './Components/Contact';
import PageNotFound from './Components/PageNotFound';
import ContactBusan from './Components/ContactBusan';
import './App.css';


function App() {
  return (
    <>
      <BrowserRouter>
        <nav>
          <Link to="/">Home</Link>
          { ' | ' }
          <Link to="/contact">Contact</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />

            <Route path="contact" element={<Contact />} >
              <Route path="busan" element={<ContactBusan />} />
          </Route>

          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App