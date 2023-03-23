import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import SlideFive from "./page/SlideFive";
import SlideFour from "./page/SlideFour";
import VariantA from "./page/SlideOne/VariantA";
import VariantB from "./page/SlideOne/VariantB";
import SlideSix from "./page/SlideSix";
import SlideThree from "./page/SlideThree";
import SlideTwo from "./page/SlideTwo";

function App() {
  return (
    <div>
      <Header />
      <VariantA />
      <VariantB />
      <SlideTwo />
      <SlideThree />
      <SlideFour />
      <SlideFive />
      <SlideSix />
      <Footer />
    </div>
  );
}

export default App;
