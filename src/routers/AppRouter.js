import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar";
import AboutPage from "../views/AboutPage";
import CategoriesPage from "../views/CategoriesPage";
import ContactPage from "../views/ContactPage";
import DashboardPage from "../views/DashboardPage";
import HomePage from "../views/HomePage";
import LoginPage from "../views/LoginPage";
import NotFoundPage from "../views/NotFoundPage";
import PaymentsPage from "../views/PaymentsPage";
import ProfilePage from "../views/ProfilePage";
import RegisterPage from "../views/RegisterPage";

export default function AppRouter() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route exact path="/" element={<HomePage />} />

        <Route exact path="/profile/:username" element={<ProfilePage />} />
        <Route path="/categories" element={<CategoriesPage />} />

        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/payments" element={<PaymentsPage />} />

        <Route path="/login" element={<LoginPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}
