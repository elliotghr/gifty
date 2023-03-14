import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavGif from "./components/NavGif";
import { GifProvider } from "./context/GifContext";
import Detail from "./pages/Detail";
import Home from "./pages/Home";
import SearchPage from "./pages/SearchPage";

function App() {
  return (
    <div className="main">
      <GifProvider>
        <BrowserRouter>
          <NavGif></NavGif>
          <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route
              path="/search/:keyword"
              element={<SearchPage></SearchPage>}
            ></Route>
            <Route path="/gif/:id" element={<Detail></Detail>}></Route>
          </Routes>
        </BrowserRouter>
      </GifProvider>
    </div>
  );
}

export default App;
