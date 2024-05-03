import React from "react";
import { Container } from "react-bootstrap";
import "./App.css";
import Home from "./Components/Home";
import Services from "./Components/Services";
import Login from "./Components/login";
import Footer from "./Components/Footer";
import AboutUs from "./Components/AboutUs";

function App() {
  return (
    <>
      <div className="App">
        <Container>
          <div>
            <Home />
          </div>
          <div>
            <Services />
          </div>
          <div>
            <AboutUs />
          </div>
          <div>
            <Login />
          </div>
          <div>
            <Footer />
          </div>
        </Container>
      </div>
    </>
  );
}

export default App;
