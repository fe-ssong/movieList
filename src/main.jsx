import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/layout";
import MovieDetail from "./components/movieDetail";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<App />}></Route>
        <Route path="/movie-detail/:id" element={<MovieDetail />} />        
      </Route>      
    </Routes>
  </Router>
);