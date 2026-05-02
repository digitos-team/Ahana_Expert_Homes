import React from 'react';
import { useNavigate, Link } from 'react-router';

const AdminLayout = ({ children, title }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    navigate('/admin');
  };

  return (
    <div className="min-h-screen bg-[#F8F9FA] flex">
      {/* Sidebar */}
      <aside className="w-64 bg-primary text-white hidden md:flex flex-col">
        <div className="p-6 border-b border-white/10">
          <h2 className="text-xl font-bold text-gold-gradient">AHANA ADMIN</h2>
        </div>
        
        <nav className="flex-1 p-4 space-y-2">
          <Link 
            to="/admin/dashboard" 
            className="flex items-center space-x-3 px-4 py-3 rounded-lg bg-white/10 text-white"
          >
            <span>Enquiries</span>
          </Link>
          {/* Add more links here as needed */}
        </nav>
        
        <div className="p-4 border-t border-white/10">
          <button 
            onClick={handleLogout}
            className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg hover:bg-destructive/10 hover:text-destructive transition-colors text-muted-foreground"
          >
            <span>Logout</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 h-16 flex items-center justify-between px-8">
          <h1 className="text-xl font-semibold text-gray-800">{title}</h1>
          
          <div className="flex items-center space-x-4">
            <span className="text-sm text-gray-500">Welcome, Admin</span>
            <div className="h-8 w-8 rounded-full bg-gold-gradient flex items-center justify-center text-primary font-bold">
              A
            </div>
          </div>
        </header>

        {/* Page Content */}
        <div className="flex-1 overflow-auto p-8">
          {children}
        </div>
      </main>
    </div>
  );
};

export default AdminLayout;
