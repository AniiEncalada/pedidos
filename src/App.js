import React, { useEffect } from "react";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import { getToken } from "store/services/auth.service";
import { store } from "store/store";
import { AppRouter } from "./router/AppRouter";

function App() {
  useEffect(() => {
    getToken();
  }, []);

  return (
    <Provider store={store}>
      <ToastContainer />
      <AppRouter />
    </Provider>
  );
}

export default App;
