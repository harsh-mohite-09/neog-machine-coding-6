import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import RestaurantPage from "./pages/RestaurantPage";

function App() {
  return (
    <Routes>
      <Route index={true} element={<HomePage />} />
      <Route path="/restaurant/:id" element={<RestaurantPage />} />
    </Routes>
  );
}

export default App;
