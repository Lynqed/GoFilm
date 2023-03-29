import React, { useCallback, useEffect, useRef, useState } from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import { latestProjectsId } from './page/SlideThree';
import Cursor from './components/Cursor';
import { IHistoryItem, TypeGroup } from './types';

import SlideContainer from './page';

import { debouncer, getSliderById } from './utils';

const debounce = debouncer(250);

function App() {
  const inProgress = useRef(false);
  const currentSlider = useRef(0);
  const [history, setHistory] = useState<IHistoryItem[]>([
    {
      sliderId: 0,
      group: TypeGroup.main,
      key: new Date().getTime()
    }
  ]);

  const setInProgress = useCallback(() => {
    inProgress.current = true;
    setTimeout(() => {
      inProgress.current = false;
    }, 500);
  }, []);

  const goTo = useCallback((id: number) => {
    setHistory((history) => {
      const item = getSliderById(id);
      if (!item) {
        return history;
      }
      const sliderData = {
        sliderId: id,
        group: item.item.group,
        key: new Date().getTime()
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
      if (!item || item.last) return history;
      setInProgress();
      const sliderData = {
        sliderId: item.data[item.index + 1].id,
        group: item.item.group,
        key: new Date().getTime()
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
        key: new Date().getTime()
      };
      return [last, sliderData];
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
    currentSlider.current = last.sliderId;
  }, [history]);

  useEffect(() => {
    document.addEventListener('wheel', listener);
    return () => {
      document.removeEventListener('wheel', listener);
    };
  }, []);
  const currentSlide = history[history.length - 1];
  return (
    <div>
      <Header goTo={goTo} currentSlide={currentSlide} />
      <Cursor />
      {history.map((value, i) => {
        const end = history.length > 1 ? i === 0 : false;
        const start = i === 1 ? true : false;
        return (
          <SlideContainer
            key={value.key}
            value={value}
            start={start}
            end={end}
          />
        );
      })}
    </div>
  );
}

export default App;
