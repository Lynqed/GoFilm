import React, { useEffect, useRef, useState } from "react";
import _ from "lodash";
import Footer from "./components/Footer";
import Header from "./components/Header";
import SlideFive from "./page/SlideFive";
import SlideFour from "./page/SlideFour";
import VariantA from "./page/SlideOne/VariantA";
import VariantB from "./page/SlideOne/VariantB";
import SlideSix from "./page/SlideSix";
import SlideThree from "./page/SlideThree";
import SlideTwo from "./page/SlideTwo";

const sliders = {
  0: VariantA,
  1: SlideTwo,
  2: SlideThree,
  3: SlideFour,
  4: SlideFive,
  5: SlideSix,
};
export const debouncer = (timeout: number) =>
  _.debounce((f) => f(), timeout, { leading: false });

const debounce = debouncer(250);

export interface ICommon {
  end: boolean;
}

function App() {
  const [history, setHistory] = useState<
    {
      sliderIndex: number;
      key: number;
    }[]
  >([
    {
      sliderIndex: 0,
      key: new Date().getTime(),
    },
  ]);

  const goTo = (index: number) => {
    setHistory((history) => {
      if (history.length === 1) {
        return [...history, { sliderIndex: index, key: new Date().getTime() }];
      }
      const last = history[history.length - 1];
      if (last.sliderIndex === index) return history;
      return [last, { sliderIndex: index, key: new Date().getTime() }];
    });
  };
  const next = () => {
    setHistory((history) => {
      const last = history[history.length - 1];
      if (last.sliderIndex === 5) return history;
      return [
        last,
        { sliderIndex: last.sliderIndex + 1, key: new Date().getTime() },
      ];
    });
  };
  const prev = () => {
    setHistory((history) => {
      const last = history[history.length - 1];
      if (last.sliderIndex === 0) return history;
      return [
        last,
        { sliderIndex: last.sliderIndex - 1, key: new Date().getTime() },
      ];
    });
  };
  useEffect(() => {
    document.addEventListener("wheel", (e: WheelEvent) => {
      debounce(() => {
        if (e.deltaY < 0) {
          prev();
          return;
        }
        if (e.deltaY > 0) {
          next();
          return;
        }
      });
    });
  }, []);
  return (
    <div>
      <Header goTo={goTo} />
      {history.map((value, i) => {
        // @ts-ignore
        const Component = sliders[value.sliderIndex];
        return (
          <Component
            key={value.key}
            end={history.length > 1 ? i === 0 : false}
          />
        );
      })}
    </div>
  );
}

export default App;
