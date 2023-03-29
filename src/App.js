import { HashRouter, Route, Routes } from "react-router-dom";
import { GifProvider } from "./context/GifContext";
import { UserProvider } from "./context/UserContext";
import { FavProvider } from "./context/FavsContext";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Error404 from "./pages/Error404";
import Detail from "./pages/Detail";
import Home from "./pages/Home";
import SearchPage from "./pages/SearchPage";
import Login from "./pages/LoginPage";
import Favs from "./pages/Favs";

function App() {
  return (
    <div className="main">
      <GifProvider>
        <FavProvider>
          <UserProvider>
            <HashRouter>
              <Header></Header>
              <Nav></Nav>
              <Routes>
                <Route path="/" element={<Home></Home>}></Route>
                <Route
                  path="/search/:keyword/:rating?"
                  element={<SearchPage></SearchPage>}
                ></Route>
                <Route path="/gif/:id" element={<Detail></Detail>}></Route>
                <Route path="/login" element={<Login></Login>}></Route>
                <Route path="/favs" element={<Favs></Favs>}></Route>
                <Route path="*" element={<Error404></Error404>}></Route>
              </Routes>
            </HashRouter>
          </UserProvider>
        </FavProvider>
      </GifProvider>
    </div>
  );
}

export default App;
