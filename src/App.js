import "./App.css";
import React from "react";
import LandingPage from "./Components/LandingPage/LandingPage";
// import InformationPage  from '../src/Components/LandingPage/InformationPage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Wedding from "./Components/Wedding/Wedding";
import LoginUser from "./Components/User/LoginUser";
import SignupUser from "./Components/User/SignupUser";
import LoginAdmin from "./Components/Admin/LoginAdmin";
import SignupAdmin from "./Components/Admin/SignupAdmin";
import LoginphotoG from "./Components/Photographer/LoginphotoG";
import SignupphotoG from "./Components/Photographer/SignupphotoG";
import Home from "../src/Components/Home/Home";
import { createTheme , ThemeProvider } from "@mui/material";
import Register from "./Components/User/Register";
import PhotographerProfile from "./Components/Profile/PhotographerProfile";
import Navbar from "./Components/Common/Navbar";
import { useParams } from "react-router";
// import PhotographerProfile from "./Components/Profile/PhotographerProfile";
import PhotographerPortfolio from "./Components/Photographer/PhotographerPortfolio";
import PricingPage from "../src/Components/Common/PricingPage"


const theme = createTheme ({
  palette: {
    primary: {
      main: "#e85a4f",
    },
    secondary: {
      main: "#6b3e26",
    },
    typography: {
      fontFamily: "Montserrat",
    },
  },
});

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/wedding" element={<Wedding />} />
            <Route path="/user/login" element={<LoginUser/>} />
            <Route path="/user/signup" element={<SignupUser/>} />
            <Route path="/admin/login" element={<LoginAdmin/>} />
            <Route path="/admin/signup" element={<SignupAdmin/>} />
            <Route path="/photo/login" element={<LoginphotoG/>} />
            <Route path="/photo/signup" element={<SignupphotoG/>} />
            <Route path="/register" element={<Register/>} />
            <Route path="/home" element={<Home />} />
            <Route path="/photographer/home" element={<PhotographerPortfolio />} />
            <Route path="/photographer/profile" element={<PhotographerProfile />} />
            <Route path="/pricing" element={<PricingPage />}/>
            {/* <InformationPage/> */}
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}
// "start": "react-scripts start",
export default App;
