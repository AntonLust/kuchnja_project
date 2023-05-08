import './App.css'
import React, { useEffect } from 'react'
import { Route, Routes} from "react-router-dom";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import SharedLayout from "./pages/SharedLayout";
import AboutsUsPage from './components/AboutsUsPage';
import MenuPage from './components/MenuPage';
import ReviewPage from './components/ReviewPage';
import { useLocation } from 'react-router-dom';

function App() {

  const Wrapper = ({children}) => {
    const location = useLocation();
    useEffect(() => {
      document.documentElement.scrollTo({top:0, left:0, behavior:'instant'});
    }, [location.pathname]);
    return children
  } 

  return (
    <>
            <Wrapper>
            <Routes>
            <Route path="/" element={<SharedLayout />}>
                <Route index element={<Home />} />
                <Route path="/about" element={<AboutsUsPage />} />
                <Route path="/menu" element={<MenuPage />}/>
                <Route path="/reviews" element={<ReviewPage />}/>
                <Route path="/contact" element={<Contact />}/>
                <Route path="*" element={<NotFound />} />
                </Route>
            </Routes>
            </Wrapper>  
    </>
  )
}

export default App
