import { Navigate, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ForgotPasswordPage from './pages/ForgotPasswordPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ResetPasswordPage from './pages/ResetPasswordPage';
import CoursesPage from './pages/CoursesPage';
import CourseDetailsPage from './pages/CourseDetailsPage';
import CartPage from './pages/CartPage';

function HomeSection({ id }) {
  return <HomePage scrollTo={id} />;
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/categories" element={<HomeSection id="categories" />} />
      <Route path="/about" element={<HomeSection id="about" />} />
      <Route path="/contact" element={<HomeSection id="contact" />} />
      <Route path="/instructor-profile" element={<HomeSection id="instructor-profile" />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/forgot-password" element={<ForgotPasswordPage />} />
      <Route path="/reset-password" element={<ResetPasswordPage />} />
      <Route path="/courses" element={<CoursesPage />} />
      <Route path="/courses/:courseSlug" element={<CourseDetailsPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
