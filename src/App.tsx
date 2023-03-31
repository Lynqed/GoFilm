import React, { useCallback, useEffect, useRef, useState } from 'react';
import Header from './components/Header';
import { latestProjectsId } from './page/SlideThree';
import Cursor from './components/Cursor';
import { IHistoryItem, TypeGroup } from './types';

import SlideContainer from './page';

import { debouncer, getSliderById, isMobile } from './utils';

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
      if (!item) return history;
      const nextItem = item.data[item.index + 1];
      if (!nextItem) return history;
      setInProgress();
      const sliderData = {
        sliderId: nextItem.id,
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
    if (mobileDevice) {
      document.addEventListener('touchstart', listenerTouchstart);
      document.addEventListener('touchend', listenerTouchend);
    }
    document.addEventListener('wheel', listener);
    return () => {
      document.removeEventListener('wheel', listener);
      if (mobileDevice) {
        document.removeEventListener('touchstart', listenerTouchstart);
        document.removeEventListener('touchend', listenerTouchend);
      }
    };
  }, []);
  const currentSlide = history[history.length - 1];
  return (
    <div>
      <Header goTo={goTo} currentSlide={currentSlide} />
      {!mobileDevice && <Cursor />}
      {history.map((value, i) => {
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
      })}
    </div>
  );
}

export default App;
