import React, { FC, useRef } from "react";
import { ToastContainer } from "react-custom-alert";

import Header from "components/Header";
import Cursor from "components/Cursor";
import { URLS } from "utils/router";
import { isMobile } from "utils";
import { Route, Routes } from "react-router-dom";

import "react-custom-alert/dist/index.css";

import Main from "./Main";
import Project from "./Project";
import AboutUs from "./AboutUs";
interface IProps {}

const Component: FC<IProps> = ({}: IProps) => {
  const mobileDevice = useRef(isMobile());

  return (
    <div>
      <ToastContainer floatingTime={3000} />
      {!mobileDevice.current && <Cursor />}
      <Header />
      <Routes>
        <Route path={URLS.MAIN} element={<Main />} />
        <Route path={`${URLS.MAIN}:slideId`} element={<Main />} />
        <Route path={URLS.PROJECT} element={<Project />} />
        <Route path={URLS.ABOUT} element={<AboutUs />} />
      </Routes>
    </div>
  );
};

export default React.memo(Component);
