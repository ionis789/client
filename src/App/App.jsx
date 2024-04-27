import "./S.module.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import DialogsPage from "../DialogsPage/DialogsPage.jsx";
import WelcomePageContainer from "../WelcomePage/WelcomePageContainer.jsx";

const App = () => {
  return (
    <div className={"h-screen "}>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Navigate to="/welcome" />} />
          <Route path={"/welcome"} element={<WelcomePageContainer />} />
          <Route path={"/dialogs/*"} element={<DialogsPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
