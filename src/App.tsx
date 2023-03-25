import React, { useCallback, useEffect, useRef, useState } from "react";
import _ from "lodash";
import Footer from "./components/Footer";
import Header from "./components/Header";
import SlideFive from "./page/SlideFive";
import SlideFour from "./page/SlideFour";
import VariantA from "./page/SlideOne/VariantA";
import VariantB from "./page/SlideOne/VariantB";
import SlideSix from "./page/SlideSix";
import SlideThree, { latestProjectsId } from "./page/SlideThree";
import SlideTwo from "./page/SlideTwo";
import Cursor from "./components/Cursor";

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
  const currentSlider = useRef(0);
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

  const goTo = useCallback((index: number) => {
    setHistory((history) => {
      if (history.length === 1) {
        return [...history, { sliderIndex: index, key: new Date().getTime() }];
      }
      const last = history[history.length - 1];
      if (last.sliderIndex === index) return history;
      return [last, { sliderIndex: index, key: new Date().getTime() }];
    });
  }, []);
  const next = useCallback(() => {
    setHistory((history) => {
      const last = history[history.length - 1];
      if (last.sliderIndex === 5) return history;
      return [
        last,
        { sliderIndex: last.sliderIndex + 1, key: new Date().getTime() },
      ];
    });
  }, []);
  const prev = useCallback(() => {
    setHistory((history) => {
      const last = history[history.length - 1];
      if (last.sliderIndex === 0) return history;
      return [
        last,
        { sliderIndex: last.sliderIndex - 1, key: new Date().getTime() },
      ];
    });
  }, []);
  const listener = useCallback((e: WheelEvent) => {
    const go = () => {
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
    };
    if (currentSlider.current === 2) {
      const el = document.getElementById(latestProjectsId);
      if (el) {
        el.scrollLeft += e.deltaY / 2;
        if (el.scrollLeft + el.offsetWidth >= el.scrollWidth) {
          go();
        }
        if (el.scrollLeft === 0) {
          go();
        }
      }
    } else {
      go();
    }
  }, []);
  useEffect(() => {
    const last = history[history.length - 1];
    currentSlider.current = last.sliderIndex;
  }, [history]);
  useEffect(() => {
    document.addEventListener("wheel", listener);
    return () => {
      document.removeEventListener("wheel", listener);
    };
  }, []);
  return (
    <div>
      <Header goTo={goTo} />
      <Cursor />
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
