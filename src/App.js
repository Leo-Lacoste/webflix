import { BrowserRouter, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";

import Header from "./Header";
import Home from "./Home";
import MovieDetail from "./MovieDetail";
import "./App.css";

const queryClient = new QueryClient();

function App() {
  return (
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
  );
}

export default App;
