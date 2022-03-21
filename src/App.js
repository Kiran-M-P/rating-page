import Feedback from "./components/Feedback";
import Submit from "./components/Submit";

import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/rating-page" element={<Feedback />} />
        <Route path="/rating-page/submit" element={<Submit />} />
      </Routes>
    </BrowserRouter>
  );
}
