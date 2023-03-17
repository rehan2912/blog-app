import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import Login from "./page/Login/Login";
import Home from "./page/Home/Home";
function App() {
  return (
    <div>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
