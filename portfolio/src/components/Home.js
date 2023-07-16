import React from "react";
import "../styles/Home.css";
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";
import Particle from "./Particle";


function Home() {
  return ( <div className="home">
    {/* <Particle /> */}
    <div>
        <Header />
    </div>
    <div>
        <Body />
    </div>
    <div>
        <Footer />
    </div>
  </div>
  );
}

export default Home;