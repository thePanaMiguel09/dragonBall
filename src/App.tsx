import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import "./App.css";
import Home from "./pages/HomePage/Home";

const queryCliente = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryCliente}>
      <div className="container">
        <Home />
      </div>
    </QueryClientProvider>
  );
}

export default App;
