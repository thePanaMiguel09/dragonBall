import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/HomePage/Home";
import Details from "./pages/Details/Details";

import "./App.css";

const queryCliente = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryCliente}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details/:id" element={<Details />} />
          
        </Routes>
      </BrowserRouter>
      <div className="container"></div>
    </QueryClientProvider>
  );
}

export default App;
