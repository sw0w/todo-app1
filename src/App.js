import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import HomeView from "./components/homeView";
import AboutView from "./components/aboutView";
import ListView from "./components/listView";
import ContactView from "./components/contactView";
import PrivateRoute from "./components/PrivateRoute";
import LoginView from "./components/loginView";
import FeedbackView from "./components/feedbackView";
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
        <Route path="/contact" element={<ContactView />} />
        <Route path="/users/:uid" element={<ProfileView />} />
        <Route path="/feedback" element={<FeedbackView />} />
      </Routes>
    </Router>
  );
}

export default App;
