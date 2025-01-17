import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import HomeView from "./components/homeView";
import AboutView from "./components/aboutView";
import ListView from "./components/listView";
import PrivateRoute from "./components/PrivateRoute";
import LoginView from "./components/loginView";
import "./App.css";
import ProfileView from "./components/profileView";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/about" element={<AboutView />} />
        <Route
          path="/list"
          element={
            <PrivateRoute>
              <ListView />
            </PrivateRoute>
          }
        />
        <Route path="/login" element={<LoginView />} />
        <Route path="/users/:uid" element={<ProfileView />} />
      </Routes>
    </Router>
  );
}

export default App;
