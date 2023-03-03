import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import './App.css'
import styled from "styled-components";
import Navbar from "./components/Navbar";
import Attendance from "./pages/Attendance";
import { links } from "./constants/links";

function App() {
  return (
    <Container>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path={links.home.root} element={<Home />} />
          <Route path={links.attendance.root} element={<Attendance />} />
        </Routes>
      </BrowserRouter>
    </Container>
  );
}

export default App;

const Container = styled.div``