import { Route, Routes } from "react-router-dom";
import { Homepage } from "./pages/Homepage";
import { FavoriteGif } from "./pages/FavoriteGif";
import { FavoritesProvider } from "./context/FavoritesContext"; 
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";

function App() {
  return (
    <FavoritesProvider>
      <Navbar />
      <div className="min-h-screen bg-slate-50 flex flex-col justify-between">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/favorite" element={<FavoriteGif />} />
        </Routes>
      </div>
      <Footer />
    </FavoritesProvider>
  );
}

export default App;
