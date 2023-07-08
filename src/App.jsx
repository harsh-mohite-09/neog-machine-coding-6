import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import RecipeDetailPage from "./pages/RecipeDetailPage";

function App() {
  return (
    <Routes>
      <Route index={true} element={<HomePage />} />
      <Route path="/recipe/:id" element={<RecipeDetailPage />} />
    </Routes>
  );
}

export default App;
