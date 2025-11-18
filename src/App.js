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
        <Route path="/hire-mobile-app-developers" element={<Home />} />
        <Route
          path="/hire-mobile-app-developers/thankyou"
          element={<ThanksPage />}
        />
      </Routes>
      <BackToTop />
    </BrowserRouter>
  );
}

export default App;
