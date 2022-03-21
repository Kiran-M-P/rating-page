import Feedback from "./components/Feedback";
import Submit from "./components/Submit";

import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Feedback />} />
        <Route path="/submit" element={<Submit />} />
      </Routes>
    </BrowserRouter>
  );
}
