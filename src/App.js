import React from "react";
import { Helmet } from "react-helmet";
import { 
  BrowserRouter as Router, 
  Routes,
  Route 
} from 'react-router-dom';

import ModelCanvas from "./Components/ModelCanvas";
import NotFound from "./Components/NotFound";
import MainPage from "./Components/MainPage";

export default function App() {
  const TITLE = "3Dmodelling";
  return (
    <div>
      <Helmet>
        <title>{ TITLE }</title>
      </Helmet>
      <Router>
        <Routes>
          <Route path="*" element={<NotFound/>}></Route>
          <Route path="/" element={<MainPage/>}></Route>
          <Route path="/canvas" element={<ModelCanvas/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}