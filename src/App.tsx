import "./App.css";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryCliente = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryCliente}>
      <div className="container">Hola mundo</div>
    </QueryClientProvider>
  );
}

export default App;
