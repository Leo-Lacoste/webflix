import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";

import Header from "./Header";
import Home from "./Home";
import MovieDetail from "./MovieDetail";
import "./App.css";

const queryClient = new QueryClient();

function App() {
  const [favorites, setFavorites] = useState([]);
  const addToFavorite = (id) => (event) => {
    event.preventDefault();
    if (!favorites.includes(id)) {
      setFavorites([...favorites, id]);
    }
  };
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <div className="App">
          <Header favorites={favorites} />
          <main className="AppMain">
            <Routes>
              <Route
                path="/"
                element={
                  <Home addToFavorite={addToFavorite} favorites={favorites} />
                }
              />
              <Route
                path="/movies/:id"
                element={
                  <MovieDetail
                    addToFavorite={addToFavorite}
                    favorites={favorites}
                  />
                }
              />
            </Routes>
          </main>
        </div>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
