import React from "react";
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";
// import Particle from "../components/Particle";

import "../styles/Home.css";

function Home() {
  return (<div className="home">
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