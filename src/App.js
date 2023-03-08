import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import Detail from "./components/Detail";
import Home from "./pages/Home";
import SearchPage from "./pages/SearchPage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavLink to={"/"}>
          <h1>Gif</h1>
        </NavLink>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route
            path="/search/:keyword"
            element={<SearchPage></SearchPage>}
          ></Route>
          <Route path="/gif/:id" element={<Detail></Detail>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
