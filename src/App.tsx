import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Landingpage from "./pages/Landingpage";
import ReactGA from "react-ga4";

function App() {
  ReactGA.initialize("G-QEZQ7980TZ");
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<Landingpage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
