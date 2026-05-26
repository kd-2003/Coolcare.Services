import { useEffect, useState } from 'react';
import api from '../services/api';
import Loader from '../components/Loader';

function AdminDashboard() {
  const [stats, setStats] = useState({ bookings: 0, customers: 0, services: 0 });
  const [loading, setLoading] = useState(false);
  const [services, setServices] = useState([]);
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const [bookingRes, customerRes, serviceRes] = await Promise.all([
          api.get('/bookings'),
          api.get('/customers'),
          api.get('/services'),
        ]);
        setStats({
          bookings: bookingRes.data.length,
          customers: customerRes.data.length,
          services: serviceRes.data.length,
        });
        setServices(serviceRes.data);
        setCustomers(customerRes.data);
      } catch (error) {
        console.warn('Admin API load failed');
      }
      setLoading(false);
    };

    fetchData();
  }, []);

  return (
    <section className="container py-16">
      <div className="mb-10">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">Admin Dashboard</p>
        <h1 className="mt-4 text-4xl font-semibold text-slate-900">Manage Services & Customers</h1>
      </div>
      {loading ? (
        <Loader />
      ) : (
        <div className="space-y-8">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Total Bookings</p>
              <p className="mt-4 text-4xl font-semibold text-primary">{stats.bookings}</p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Customers</p>
              <p className="mt-4 text-4xl font-semibold text-primary">{stats.customers}</p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Services</p>
              <p className="mt-4 text-4xl font-semibold text-primary">{stats.services}</p>
            </div>
          </div>
          <div className="grid gap-8 lg:grid-cols-[0.95fr_0.9fr]">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-slate-900">Services Table</h2>
              <div className="mt-6 overflow-x-auto">
                <table className="min-w-full text-left text-sm">
                  <thead className="bg-slate-50 text-slate-600">
                    <tr>
                      <th className="px-4 py-4">Name</th>
                      <th className="px-4 py-4">Price</th>
                      <th className="px-4 py-4">Created</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    {services.map((service) => (
                      <tr key={service._id}>
                        <td className="px-4 py-4 text-slate-800">{service.serviceName}</td>
                        <td className="px-4 py-4 text-slate-600">₹{service.price}</td>
                        <td className="px-4 py-4 text-slate-600">{new Date(service.createdAt).toLocaleDateString()}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-slate-900">Customers</h2>
              <div className="mt-6 overflow-x-auto">
                <table className="min-w-full text-left text-sm">
                  <thead className="bg-slate-50 text-slate-600">
                    <tr>
                      <th className="px-4 py-4">Name</th>
                      <th className="px-4 py-4">Email</th>
                      <th className="px-4 py-4">Role</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    {customers.map((customer) => (
                      <tr key={customer._id}>
                        <td className="px-4 py-4 text-slate-800">{customer.name}</td>
                        <td className="px-4 py-4 text-slate-600">{customer.email}</td>
                        <td className="px-4 py-4 text-slate-600">{customer.role}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default AdminDashboard;
