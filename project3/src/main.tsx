import React, { FC } from "react";
import { createRoot } from "react-dom/client";

import MainPage from "./components/MainPage";

import "./index.css";

const App = document.getElementById("root");
const Root: FC = () => {
  return <MainPage />;
};

createRoot(App!).render(<Root />);
