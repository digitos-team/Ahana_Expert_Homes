import { BrowserRouter as Router, Routes, Route } from 'react-router';
import { Home } from '@/pages/Home';
import AdminLogin from '@/pages/Admin/AdminLogin';
import AdminDashboard from '@/pages/Admin/AdminDashboard';

export function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        {/* Add more routes here as the app grows */}
      </Routes>
    </Router>
  );
}
