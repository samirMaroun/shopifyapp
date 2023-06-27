import logo from "./logo.svg";
import "./App.css";
import WebFont from "webfontloader";
import { useEffect } from "react";
import Navigate from "./Navigation/Navigate";
function App() {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto"],
      },
    });
  }, []);
  return <Navigate />;
}

export default App;
