import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import AddTaskPage from "./pages/AddTaskPage";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={<HomePage />}
        />
        <Route
          path="/add-tasks"
          element={<AddTaskPage />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
