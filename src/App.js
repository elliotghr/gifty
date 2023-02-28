import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import SearchPage from "./pages/SearchPage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route
            path="/gifs/:keyword"
            element={<SearchPage></SearchPage>}
          ></Route>
        </Routes>
        <article>
          <nav>
            <NavLink to="/gifs/spiderman">Spiderman</NavLink>
            <NavLink to="/gifs/oasis">oasis</NavLink>
            <NavLink to="/gifs/Javascript">Javascript</NavLink>
          </nav>
        </article>
      </BrowserRouter>
    </div>
  );
}

export default App;
