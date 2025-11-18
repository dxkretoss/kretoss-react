import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ThanksPage from "./pages/ThanksPage";
import { Toaster } from "react-hot-toast";
import BackToTop from "./components/BackToTop";

function App() {
  return (
    <BrowserRouter>
      <Toaster />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/thankyou" element={<ThanksPage />} />
      </Routes>
      <BackToTop />
    </BrowserRouter>
  );
}

export default App;
