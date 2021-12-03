import { Route, Routes } from "react-router-dom";
import { TeamContextProvider } from "./components/store/team-context";
import { AllPlayersContextProvider } from "./components/store/allPlayers-context";

import Team from "./pages/Team";
import ActivePlayers from "./pages/ActivePlayers";
import AddPlayer from "./pages/AddPlayer";
import Header from "./components/UI/Header";
import { Fragment } from "react";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <Fragment>
      <TeamContextProvider>
        <AllPlayersContextProvider>
          <Header />
          <Layout>
            <Routes>
              <Route path="/" element={<ActivePlayers />} exact></Route>
              <Route path="/team" element={<Team />}></Route>
              <Route path="/add-player" element={<AddPlayer />}></Route>
            </Routes>
          </Layout>
        </AllPlayersContextProvider>
      </TeamContextProvider>
    </Fragment>
  );
}

export default App;
