import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import Navbar from "./Components/Navbar";
import Rooms from "./Components/Rooms";
import { useDispatch } from "react-redux";
import AddRooms from "./Components/AddRooms";

function App() {
  const dispatch = useDispatch();


  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route index path="/" element={<Rooms /> } />
        <Route path="/addRoom" element={<AddRooms />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
