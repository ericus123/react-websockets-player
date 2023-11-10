import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { WsPlayerProps } from "./types";

const exampleProps: WsPlayerProps = {
  wsUrl: "ws://127.0.0.1:4200",
  withWorker: true,
};

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App {...exampleProps} />
  </React.StrictMode>,
);
