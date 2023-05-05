import React, { useCallback, useEffect, useRef, useState } from "react";
import { v4 as uuid } from "uuid";

import Header from "./components/Header";
import { ToastContainer } from "react-custom-alert";
import "react-custom-alert/dist/index.css";
import Cursor from "./components/Cursor";
import { IHistoryItem, TypeGroup } from "./types";

import SlideContainer from "./page";

import { debouncer, generateSliderId, getSliderById, isMobile } from "./utils";
import globalStyle from "style/global.module.scss";

const listOfPages: IHistoryItem[] = [
  {
    sliderId: 0,
    group: TypeGroup.main,
    key: uuid(),
  },
  {
    sliderId: 1,
    group: TypeGroup.main,
    key: uuid(),
  },
  {
    sliderId: 2,
    group: TypeGroup.main,
    key: uuid(),
  },
  {
    sliderId: 3,
    group: TypeGroup.main,
    key: uuid(),
  },
  {
    sliderId: 4,
    group: TypeGroup.main,
    key: uuid(),
  },
  {
    sliderId: 5,
    group: TypeGroup.main,
    key: uuid(),
  },
  {
    sliderId: 9,
    group: TypeGroup.main,
    key: uuid(),
  },
];
const listOfPagesTest: IHistoryItem[] = [
  {
    sliderId: 6,
    group: TypeGroup.project,
    key: uuid(),
  },
  {
    sliderId: 7,
    group: TypeGroup.project,
    key: uuid(),
  },
  {
    sliderId: 8,
    group: TypeGroup.project,
    key: uuid(),
  },
];
const debounce = debouncer(250);

function App() {
  const mobileDevice = useRef(isMobile());
  const inProgress = useRef(false);
  const currentSlider = useRef(0);
  const touchStartScreenY = useRef(0);
  const [history, setHistory] = useState<IHistoryItem[]>([
    {
      sliderId: 0,
      group: TypeGroup.main,
      key: new Date().getTime(),
    },
  ]);

  const setInProgress = useCallback(() => {
    inProgress.current = true;
    setTimeout(() => {
      inProgress.current = false;
    }, 500);
  }, []);

  const goTo = useCallback((id: number) => {
    const el = document.getElementById(generateSliderId(id));
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
    return;
    setHistory((history) => {
      const item = getSliderById(id);
      if (!item) {
        return history;
      }
      const sliderData = {
        sliderId: id,
        group: item.item.group,
        key: new Date().getTime(),
      };
      if (history.length === 1) {
        return [...history, sliderData];
      }
      const last = history[history.length - 1];
      if (last.sliderId === id) return history;
      return [last, sliderData];
    });
  }, []);

  const next = useCallback(() => {
    if (inProgress.current) return;
    setHistory((history) => {
      const last = history[history.length - 1];
      const item = getSliderById(last.sliderId);
      if (!item) return history;
      const nextItem = item.data[item.index + 1];
      if (!nextItem) return history;
      setInProgress();
      const sliderData = {
        sliderId: nextItem.id,
        group: item.item.group,
        key: new Date().getTime(),
      };
      return [last, sliderData];
    });
  }, []);

  const prev = useCallback(() => {
    if (inProgress.current) return;
    setHistory((history) => {
      const last = history[history.length - 1];
      const item = getSliderById(last.sliderId);
      if (!item || item.first) return history;
      setInProgress();
      const sliderData = {
        sliderId: item.data[item.index - 1].id,
        group: item.item.group,
        key: new Date().getTime(),
      };
      return [last, sliderData];
    });
  }, []);

  const listener = useCallback((e: { deltaY: number }) => {
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
    const item = getSliderById(currentSlider.current);
    if (item) {
      if (item.item.scrollElementId) {
        const el = document.getElementById(item.item.scrollElementId);
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
    }
  }, []);

  useEffect(() => {
    const last = history[history.length - 1];
    currentSlider.current = last.sliderId;
  }, [history]);

  const listenerTouchend = useCallback((e: TouchEvent) => {
    const deltaY =
      touchStartScreenY.current - (e.changedTouches[0]?.screenY || 0);
    listener({ deltaY });
  }, []);
  const listenerTouchstart = useCallback((e: TouchEvent) => {
    touchStartScreenY.current = e.changedTouches[0]?.screenY || 0;
  }, []);

  useEffect(() => {
    return;
    // if (mobileDevice.current) {
    //   document.addEventListener('touchstart', listenerTouchstart);
    //   document.addEventListener('touchend', listenerTouchend);
    // }
    // document.addEventListener('wheel', listener);
    // return () => {
    //   document.removeEventListener('wheel', listener);
    //   if (mobileDevice.current) {
    //     document.removeEventListener('touchstart', listenerTouchstart);
    //     document.removeEventListener('touchend', listenerTouchend);
    //   }
    // };
  }, []);
  const currentSlide = history[history.length - 1];
  return (
    <div id="main" className={globalStyle.slidersMainContainer}>
      <Header goTo={goTo} currentSlide={currentSlide} />
      <ToastContainer floatingTime={3000} />
      {!mobileDevice.current && <Cursor />}
      {listOfPages.map((value) => {
        return (
          <SlideContainer
            key={value.key}
            goTo={goTo}
            value={value}
            start={false}
            end={false}
          />
        );
      })}

      {/* {history.map((value, i) => {
        const end = history.length > 1 ? i === 0 : false;
        const start = i === 1 ? true : false;
        return (
          <SlideContainer
            key={value.key}
            goTo={goTo}
            value={value}
            start={start}
            end={end}
          />
        );
      })} */}
    </div>
  );
}

export default App;
