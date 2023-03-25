import { BrowserRouter, Route, Routes } from "react-router-dom";
import Error404 from "./pages/Error404";
import { GifProvider } from "./context/GifContext";
import Detail from "./pages/Detail";
import Home from "./pages/Home";
import SearchPage from "./pages/SearchPage";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Login from "./pages/Login";
import { UserProvider } from "./context/UserContext";

function App() {
  return (
    <div className="main">
      <GifProvider>
        <UserProvider>
          <BrowserRouter>
            <Nav></Nav>
            <Header></Header>
            <Routes>
              <Route path="/" element={<Home></Home>}></Route>
              <Route
                path="/search/:keyword/:rating?"
                element={<SearchPage></SearchPage>}
              ></Route>
              <Route path="/gif/:id" element={<Detail></Detail>}></Route>
              <Route path="/login" element={<Login></Login>}></Route>
              <Route path="*" element={<Error404></Error404>}></Route>
            </Routes>
          </BrowserRouter>
        </UserProvider>
      </GifProvider>
    </div>
  );
}

export default App;
