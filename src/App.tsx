import React from "react";
import "./App.css";
import Headline from "./components/Headline";
import Middle from "./components/Middle";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <div className="flex flex-col w-[450px] mx-auto my-20 bg-white">
        <Headline />
        <Middle />
        <Footer />
      </div>
    </div>
  );
}

export default App;
