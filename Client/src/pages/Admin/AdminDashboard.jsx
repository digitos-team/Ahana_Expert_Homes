import React, { useState, useEffect } from 'react';
import AdminLayout from '@/components/Admin/AdminLayout';
import axios from 'axios';
import * as XLSX from 'xlsx';


const AdminDashboard = () => {
  const [enquiries, setEnquiries] = useState([]);
  const [filter, setFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const baseUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000';

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      fetchEnquiries();
    }, 500);

    return () => clearTimeout(delayDebounceFn);
  }, [searchQuery]);

  const fetchEnquiries = async () => {
    try {
      const response = await axios.get(`${baseUrl}/api/enquiries${searchQuery ? `?search=${searchQuery}` : ''}`);
      if (response.data.success) {
        setEnquiries(response.data.data);
      }
    } catch (error) {
      console.error('Error fetching enquiries:', error);
    }
  };

  const filteredEnquiries = filter === 'All' 
    ? enquiries 
    : enquiries.filter(e => e.status === filter);

  const handleStatusChange = async (id, newStatus) => {
    try {
      await axios.put(`${baseUrl}/api/enquiries/${id}`, { status: newStatus });
      setEnquiries(enquiries.map(e => e._id === id ? { ...e, status: newStatus } : e));
    } catch (error) {
      console.error('Error updating status:', error);
      alert('Failed to update status');
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this enquiry?')) {
      try {
        await axios.delete(`${baseUrl}/api/enquiries/${id}`);
        setEnquiries(enquiries.filter(e => e._id !== id));
      } catch (error) {
        console.error('Error deleting enquiry:', error);
        alert('Failed to delete enquiry');
      }
    }
  };

  const handleExport = () => {
    if (filteredEnquiries.length === 0) {
      alert('No data to export');
      return;
    }

    const dataToExport = filteredEnquiries.map(enquiry => ({
      'Date': new Date(enquiry.createdAt).toLocaleDateString(),
      'Time': new Date(enquiry.createdAt).toLocaleTimeString(),
      'Name': enquiry.name,
      'Email': enquiry.email,
      'Mobile': enquiry.mobile,
      'Unit Type': enquiry.unitType,
      'Message': enquiry.message,
      'Status': enquiry.status
    }));

    const worksheet = XLSX.utils.json_to_sheet(dataToExport);

    // Set column widths
    const colWidths = [
      { wch: 12 }, // Date
      { wch: 15 }, // Time
      { wch: 25 }, // Name
      { wch: 30 }, // Email
      { wch: 15 }, // Mobile
      { wch: 12 }, // Unit Type
      { wch: 40 }, // Message
      { wch: 12 }  // Status
    ];
    worksheet['!cols'] = colWidths;

    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Enquiries");
    XLSX.writeFile(workbook, `Ahana_Enquiries_${new Date().toISOString().split('T')[0]}.xlsx`);
  };


  return (
    <AdminLayout title="Enquiries Management">
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        {/* Filters and Search */}
        <div className="p-4 border-b border-gray-100 bg-gray-50/50 flex flex-col md:flex-row md:items-center justify-between gap-4">
          
          {/* Search Bar */}
          <div className="relative w-full md:w-96">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <input
              type="text"
              placeholder="Search by name, email or mobile..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-primary focus:border-primary sm:text-sm transition duration-150 ease-in-out"
            />
          </div>

          {/* Status Filters & Export */}
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full md:w-auto">
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

            <div className="flex items-center gap-3">
              <button
                onClick={handleExport}
                className="flex items-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg text-sm font-bold transition-all shadow-md hover:shadow-lg active:scale-95"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Export Excel
              </button>
              <div className="text-sm text-gray-500 font-medium whitespace-nowrap hidden sm:block">
                Total: {filteredEnquiries.length}
              </div>
            </div>
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
                  <tr key={enquiry._id} className="hover:bg-gray-50/50 transition-colors">
                    <td className="px-6 py-4 text-sm text-gray-600 whitespace-nowrap">
                      {new Date(enquiry.createdAt).toLocaleString('en-US', {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric',
                        hour: '2-digit',
                        minute: '2-digit'
                      })}
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
                          onClick={() => handleStatusChange(enquiry._id, 'Contacted')}
                          className="text-xs font-bold text-green-600 hover:underline"
                        >
                          Mark Contacted
                        </button>
                      )}
                      <button 
                        onClick={() => handleDelete(enquiry._id)}
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
