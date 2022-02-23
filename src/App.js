import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";

import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { favoritesSlice } from "./slices";

import Header from "./Header";
import Home from "./Home";
import MovieDetail from "./MovieDetail";
import "./App.css";

const queryClient = new QueryClient();

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(
  persistConfig,
  combineReducers({
    favorites: favoritesSlice.reducer,
  })
);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

const persistor = persistStore(store);

function App() {
  /*const [favorites, setFavorites] = useState([]);
  const addToFavorite = (id) => (event) => {
    event.preventDefault();
    if (!favorites.includes(id)) {
      setFavorites([...favorites, id]);
    }
  };*/
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        {" "}
        <QueryClientProvider client={queryClient}>
          <BrowserRouter>
            <div className="App">
              <Header />
              <main className="AppMain">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/movies/:id" element={<MovieDetail />} />
                </Routes>
              </main>
            </div>
          </BrowserRouter>
        </QueryClientProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;
