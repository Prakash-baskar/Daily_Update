

import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import FormRedux from "./Redux/FormRedux";
import FormTable from "./Redux/FormTable";
import FormEdit from "./Redux/FormEdit";
import Navbar from "./Redux/Navbar";







function App  () {
  return (

  <BrowserRouter>
  <Navbar/>
    <Routes>
       <Route path="/" element={<FormRedux/>}></Route>
       <Route path="/FormTable" element={<FormTable/>}></Route>
       {/* <Route path="/FormEdit" element={<FormEdit/>}></Route> */}
       <Route path="/FormTable/:id/edit" element={<FormEdit/>}></Route>
    </Routes>
  </BrowserRouter>
  )
};

export default App;
