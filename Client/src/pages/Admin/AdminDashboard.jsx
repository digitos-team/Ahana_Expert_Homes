import React, { useState, useEffect } from 'react';
import AdminLayout from '@/components/Admin/AdminLayout';

// Mock data - in real app, this would come from the API
const MOCK_ENQUIRIES = [
  {
    id: 1,
    name: 'John Doe',
    mobile: '+91 9876543210',
    email: 'john@example.com',
    unitType: '2 BHK',
    message: 'Interested in visiting the property next Sunday.',
    status: 'New',
    date: '2024-05-01 10:30 AM'
  },
  {
    id: 2,
    name: 'Jane Smith',
    mobile: '+91 9123456789',
    email: 'jane@gmail.com',
    unitType: '3 BHK',
    message: 'What are the payment plans available?',
    status: 'Contacted',
    date: '2024-04-30 02:15 PM'
  },
  {
    id: 3,
    name: 'Rahul Kapoor',
    mobile: '+91 8888888888',
    email: 'rahul.k@outlook.com',
    unitType: '1 BHK',
    message: 'Need brochure and floor plan.',
    status: 'New',
    date: '2024-04-29 11:00 AM'
  }
];

const AdminDashboard = () => {
  const [enquiries, setEnquiries] = useState(MOCK_ENQUIRIES);
  const [filter, setFilter] = useState('All');

  const filteredEnquiries = filter === 'All' 
    ? enquiries 
    : enquiries.filter(e => e.status === filter);

  const handleStatusChange = (id, newStatus) => {
    setEnquiries(enquiries.map(e => e.id === id ? { ...e, status: newStatus } : e));
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this enquiry?')) {
      setEnquiries(enquiries.filter(e => e.id !== id));
    }
  };

  return (
    <AdminLayout title="Enquiries Management">
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        {/* Filters */}
        <div className="p-4 border-b border-gray-100 flex items-center justify-between bg-gray-50/50">
          <div className="flex space-x-2">
            {['All', 'New', 'Contacted'].map(f => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  filter === f 
                    ? 'bg-primary text-white shadow-md' 
                    : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
          <div className="text-sm text-gray-500 font-medium">
            Total: {filteredEnquiries.length} Enquiries
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200">
                <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Date & Time</th>
                <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Customer Details</th>
                <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Requirement</th>
                <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {filteredEnquiries.length > 0 ? (
                filteredEnquiries.map((enquiry) => (
                  <tr key={enquiry.id} className="hover:bg-gray-50/50 transition-colors">
                    <td className="px-6 py-4 text-sm text-gray-600 whitespace-nowrap">
                      {enquiry.date}
                    </td>
                    <td className="px-6 py-4">
                      <div className="font-semibold text-gray-900">{enquiry.name}</div>
                      <div className="text-sm text-gray-500">{enquiry.email}</div>
                      <div className="text-sm text-gray-500">{enquiry.mobile}</div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="inline-block px-2 py-1 rounded bg-accent text-primary text-xs font-bold mb-1">
                        {enquiry.unitType}
                      </span>
                      <p className="text-sm text-gray-600 line-clamp-2 max-w-xs">{enquiry.message}</p>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                        enquiry.status === 'New' 
                          ? 'bg-blue-100 text-blue-700' 
                          : 'bg-green-100 text-green-700'
                      }`}>
                        {enquiry.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right space-x-2">
                      {enquiry.status === 'New' && (
                        <button 
                          onClick={() => handleStatusChange(enquiry.id, 'Contacted')}
                          className="text-xs font-bold text-green-600 hover:underline"
                        >
                          Mark Contacted
                        </button>
                      )}
                      <button 
                        onClick={() => handleDelete(enquiry.id)}
                        className="text-xs font-bold text-destructive hover:underline"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="px-6 py-12 text-center text-gray-400">
                    No enquiries found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminDashboard;
