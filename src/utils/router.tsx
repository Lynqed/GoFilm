import { createBrowserRouter } from "react-router-dom";

import App from "App";
import Projects from "page/Project";

export default createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/projects",
    element: <Projects />,
  },
]);
