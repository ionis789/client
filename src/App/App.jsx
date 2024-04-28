import "./S.module.css";
import { HashRouter, Route, Routes } from "react-router-dom";
import DialogsPage from "../DialogsPage/DialogsPage.jsx";
import WelcomePageContainer from "../WelcomePage/WelcomePageContainer.jsx";

const App = () => {
  return (
    <div className={"h-screen "}>
      <HashRouter>
        <Routes>
          <Route path={"/"} element={<WelcomePageContainer />} />
          <Route path={"/d/*"} element={<DialogsPage />} />
        </Routes>
      </HashRouter>
    </div>
  );
};

export default App;
