import React, { useState } from "react";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
// import Achievements from "./components/Achievements/Achievements";
// import Education from "./components/Education/Education";
import Footer from "./components/Footer/Footer";
import "./App.css";

function App() {
 
  return (
    < >
      <Header/>
     <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> 
      <main>
        <About /><br/> <br/>
         <Skills /><br/> <br/>
        {/*<Achievements />
        <Education /> */}
      </main>
      <Footer />
    </>
  );
}

export default App;
