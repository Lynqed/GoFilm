import React from "react";
import Header from "./components/Header";
import SlideFour from "./page/SlideFour";

import VariantA from "./page/SlideOne/VariantA";
import VariantB from "./page/SlideOne/VariantB";
import SlideThree from "./page/SlideThree";
import SlideTwo from "./page/SlideTwo";

function App() {
  return (
    <div>
      <Header />
      {/* <VariantA /> */}
      {/* <VariantB /> */}
      {/* <SlideTwo /> */}

      {/* <SlideThree /> */}
      <SlideFour />
    </div>
  );
}

export default App;
