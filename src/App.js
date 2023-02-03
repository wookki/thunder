import { Fragment } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import AsideNavigationBar from "./components/AsideNavigationBar";
import Home from "./pages/Home";
import MeetingDetail from "./pages/MeetingDetail";
import SearchContent from "./components/SearchContent";

import "./App.css";

const App = () => {
  return (
    <Fragment>
      <Header />
      <AsideNavigationBar />
      <Routes>
        <Route path="*" element={<Navigate to={"/gangnam"} />} />
        <Route path="/:location/" element={<Home />} />
        <Route path="/:location/:id" element={<MeetingDetail />} />
        <Route path="/search" element={<SearchContent />} />
      </Routes>
    </Fragment>
  );
};

export default App;
