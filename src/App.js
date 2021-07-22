import React, { useEffect } from "react";
import { getToken } from "./redux/services/auth.service";
import { AppRouter } from "./router/AppRouter";

function App() {
  useEffect(() => {
    getToken();
  }, []);
  return <AppRouter />;
}

export default App;
