import Footer from "./Footer";
import Home from "./Home";
import {Routes,Route} from "react-router-dom";
import ContactMe from "./ContactMe";



export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="contact-me" element={<ContactMe />} />
      </Routes>
      <Footer />
    </>
  )
}
