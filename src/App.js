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
import LoginPage from "./Components/LoginPage";
import RegisterPage from "./Components/RegisterPage";
import ModelPage from "./Components/ModelPage";
import ProfilePage from "./Components/ProfilePage";
import ProfileEditPage from "./Components/ProfileEditPage";
import UploadModelPage from "./Components/UploadModelPage";

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
          <Route path="/login" element={<LoginPage/>}></Route>
          <Route path="/register" element={<RegisterPage/>}></Route>
          <Route path="/canvas" element={<ModelCanvas modelPath={"/untitled.glb"}/>}></Route>
          <Route path="/model" element={<ModelPage/>}></Route>
          <Route path="/profile" element={<ProfilePage/>}></Route>
          <Route path="/edit-profile" element={<ProfileEditPage/>}></Route>
          <Route path="/upload-model" element={<UploadModelPage/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}