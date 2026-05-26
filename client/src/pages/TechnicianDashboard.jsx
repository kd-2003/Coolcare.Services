import { useEffect, useState } from 'react';
import api from '../services/api';
import Loader from '../components/Loader';
import TechImage from '../image/Ac Technician Image.png';

function TechnicianDashboard() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchBookings = async () => {
      setLoading(true);
      try {
        const response = await api.get('/bookings');
        setBookings(response.data);
      } catch (error) {
        console.warn('Unable to load bookings from API');
      }
      setLoading(false);
    };

    fetchBookings();
  }, []);

  return (
    <section className="container py-16">
      <div className="mb-10 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">Technician Dashboard</p>
          <h1 className="mt-4 text-4xl font-semibold text-slate-900">New Bookings</h1>
          <p className="mt-3 max-w-2xl text-slate-600">Track new assignments and service requests in one place.</p>
        </div>
        <div className="overflow-hidden rounded-[32px] border border-slate-200 bg-slate-50 shadow-xl">
          <img src={TechImage} alt="AC Technician" className="h-full w-full object-cover" />
        </div>
      </div>
      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        {loading ? (
          <Loader />
        ) : bookings.length ? (
          <div className="overflow-x-auto">
            <table className="min-w-full text-left text-sm">
              <thead className="border-b border-slate-200 bg-slate-50">
                <tr>
                  <th className="px-4 py-4">Customer</th>
                  <th className="px-4 py-4">Service</th>
                  <th className="px-4 py-4">Mobile</th>
                  <th className="px-4 py-4">Date</th>
                  <th className="px-4 py-4">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {bookings.map((booking) => (
                  <tr key={booking._id}>
                    <td className="px-4 py-4 text-slate-800">{booking.customerName}</td>
                    <td className="px-4 py-4 text-slate-600">{booking.serviceType}</td>
                    <td className="px-4 py-4 text-slate-600">{booking.mobileNumber}</td>
                    <td className="px-4 py-4 text-slate-600">{booking.preferredDate}</td>
                    <td className="px-4 py-4 text-sm font-semibold text-slate-900">{booking.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="text-slate-600">No bookings available yet. Check back after new requests arrive.</div>
        )}
      </div>
    </section>
  );
}

export default TechnicianDashboard;
