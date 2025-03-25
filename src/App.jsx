import "./css/App.css";
import Favorites from "./pages/Favorites";
import Home from "./pages/Home";
import Upcoming from "./pages/Upcoming";
import {Routes, Route} from "react-router-dom";
import { MovieProvider } from "./contexts/MovieContext";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <MovieProvider>
      <Header />
    <main className="main-content">
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/favorites" element={<Favorites />}/>
        <Route path="/upcoming" element={<Upcoming />}/>
      </Routes>
    </main>
    <Footer/>
    </MovieProvider>
  );
}


export default App;
