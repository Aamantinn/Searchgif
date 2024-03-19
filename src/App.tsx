import { Route, Routes } from "react-router-dom";
import { Homepage } from "./pages/Homepage";
import { FavoriteGif } from "./components/FavoriteGif";
import { FavoritesProvider } from './context/FavoritesContext'; // Adjust the import path as necessary

function App() {
  return (
    
    <FavoritesProvider>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/favorite" element={<FavoriteGif />} />
      </Routes>
    </FavoritesProvider>
  );
}

export default App;
