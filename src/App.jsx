import Alllisting from "./components/Alllisting";
import Create from "./components/Create";
import Navbar from "./components/Navbar";
import Read from "./components/Read";
import Update from "./components/Update";
import { BrowserRouter as Router, Route, BrowserRouter, Routes } from 'react-router-dom';



export default function App(){
  return(<BrowserRouter>
  <Navbar/>
  <Routes>
  <Route exact path="/" element={ <Alllisting/>}/>
    <Route exact path="/create" element={<Create/>}/>
    <Route path="/listing/:id" element={<Read/>} />
    <Route path="/update/:id" element={<Update/>} />
    </Routes>
    </BrowserRouter>
    

  )
}