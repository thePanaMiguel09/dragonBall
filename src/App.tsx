import "./App.css";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Header from "./Components/Header/Header";

const queryCliente = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryCliente}>
      <div className="container">
        <Header />
      </div>
    </QueryClientProvider>
  );
}

export default App;
