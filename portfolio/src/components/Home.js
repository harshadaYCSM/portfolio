import React from "react";
import "../styles/Home.css";
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";


function Home() {
  return ( <div className="home">
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