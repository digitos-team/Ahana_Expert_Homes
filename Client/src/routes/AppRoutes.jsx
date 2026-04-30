import { BrowserRouter as Router, Routes, Route } from 'react-router';
import { Home } from '@/pages/Home';

export function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Add more routes here as the app grows */}
      </Routes>
    </Router>
  );
}
