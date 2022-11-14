import React, { useMemo } from "react";
import { useRoutes } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import "./app.css";
import { RouterAuth } from "./routes/config";
import { screenRoutesByRole } from "./routes";

function App() {
  const {role} = store.getState().user
  const curRoutes = useMemo(() => {
    return screenRoutesByRole(routes)
  }, [role])
  const Element = useRoutes(curRoutes);
  return (

      <RouterAuth>{Element}</RouterAuth>

  );
}
export default App;
