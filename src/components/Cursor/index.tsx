import React, { useEffect, useRef } from "react";
import style from "./style.module.scss";
const Cursor = () => {
  const cursorRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    document.addEventListener("mousemove", (event) => {
      const { clientX, clientY } = event;
      if (cursorRef.current != null) {
        const mouseX = clientX - cursorRef.current.clientWidth / 2 + 17;
        const mouseY = clientY - cursorRef.current.clientHeight / 2 + 15;
        cursorRef.current.style.transform = `translate3d(${mouseX}px,${mouseY}px, 0) `;
      }
    });
  }, []);

  return <div className={style.cursor} ref={cursorRef} />;
};

export default React.memo(Cursor);
