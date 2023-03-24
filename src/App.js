import { BrowserRouter, Route, Routes } from "react-router-dom";
import Error404 from "./components/Error404";
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
              path="/search/:keyword/:rating?"
              element={<SearchPage></SearchPage>}
            ></Route>
            <Route path="/gif/:id" element={<Detail></Detail>}></Route>
            <Route path="*" element={<Error404></Error404>}></Route>
          </Routes>
        </BrowserRouter>
      </GifProvider>
    </div>
  );
}

export default App;
