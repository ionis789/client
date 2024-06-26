import "./S.module.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DialogsPage from "../DialogsPage/DialogsPage.jsx";
import WelcomePageContainer from "../WelcomePage/WelcomePageContainer.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<WelcomePageContainer />} />
        <Route path={"/d"} element={<DialogsPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
