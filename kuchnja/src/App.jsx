import './App.css'
import React from 'react'
import { Route, Routes} from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Reviews from "./pages/Reviews";
import NotFound from "./pages/NotFound";
import SharedLayout from "./pages/SharedLayout";

function App() {

  return (
    <>
            <Routes>
            <Route path="/" element={<SharedLayout />}>
                <Route index element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/menu" element={<Menu />}/>
                <Route path="/reviews" element={<Reviews />}/>
                <Route path="/contact" element={<Contact />}/>
                <Route path="*" element={<NotFound />} />
                </Route>
            </Routes>  
    </>
  )
}

export default App
