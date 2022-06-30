import React from "react";
import GlobalStyle from "./global/styles/globalStyles";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./components/screens/LandingPage/LandingPage";
import TutorialPage from "./components/screens/TutorialPage/TutorialPage";
import WeightPage from "./components/screens/WeightPage/WeightPage";
import ListPage from "./components/screens/ListPage/ListPage";
import DetailPage from "./components/screens/DetailPage/DetailPage";
import { DetailContextProvider } from "./contexts/detail/Provider";

function App() {
  return (
    <>
      <GlobalStyle />
      <DetailContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/tuto" element={<TutorialPage />} />
            <Route path="/weight" element={<WeightPage />} />
            <Route path="/list" element={<ListPage />} />
            <Route path="/detail" element={<DetailPage />} />
          </Routes>
        </BrowserRouter>
      </DetailContextProvider>
    </>
  );
}

export default App;
