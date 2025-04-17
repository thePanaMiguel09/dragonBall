import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import Header from "./Components/Header/Header";
import "./App.css";

import logo from "/logo_dragonballapi.webp"

const queryCliente = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryCliente}>
      <div className="container">
        <Header />
        <div className="logoContainer">
          <img src={logo} alt="logoDragonBall" className="logoImage"/>
          <h1 className="text-logo">The Dragon Ball API</h1>
        </div>
      </div>
    </QueryClientProvider>
  );
}

export default App;
