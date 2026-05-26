import { useParams, Link } from 'react-router-dom';
import { serviceData } from '../data/serviceData';

function ServiceDetail() {
  const { slug } = useParams();
  const service = serviceData.find((item) => item.slug === slug);

  if (!service) {
    return (
      <div className="container py-16 text-center">
        <h2 className="text-3xl font-semibold text-slate-900">Service not found</h2>
        <p className="mt-4 text-slate-600">Please return to the services page and choose another option.</p>
        <Link to="/services" className="mt-8 inline-flex rounded-full bg-primary px-6 py-3 text-white hover:bg-secondary transition">
          View Services
        </Link>
      </div>
    );
  }

  return (
    <section className="container py-16">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_0.65fr] lg:items-start">
        <div>
          <div className="overflow-hidden rounded-[32px] shadow-2xl">
            <img
              src={service.image}
              alt={service.serviceName}
              className="h-[420px] w-full object-cover"
              onError={(e) => { e.target.onerror = null; e.target.src = 'https://picsum.photos/seed/fallback/1000/600'; }}
            />
          </div>
          <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <h1 className="text-4xl font-semibold text-slate-900">{service.serviceName}</h1>
            <p className="mt-4 text-lg leading-8 text-slate-600">{service.details}</p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl bg-slate-50 p-6">
                <h3 className="text-sm uppercase tracking-[0.3em] text-slate-500">Starting Price</h3>
                <p className="mt-4 text-3xl font-semibold text-primary">₹{service.price}</p>
              </div>
              <div className="rounded-3xl bg-slate-50 p-6">
                <h3 className="text-sm uppercase tracking-[0.3em] text-slate-500">Benefits</h3>
                <ul className="mt-4 space-y-3 text-slate-600">
                  <li>• Certified technicians</li>
                  <li>• Transparent estimation</li>
                  <li>• Convenient home visit</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-6">
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <h3 className="text-xl font-semibold text-slate-900">Book this service</h3>
            <p className="mt-3 text-slate-600">Reserve an appointment for this service in just a few clicks.</p>
            <Link to="/booking" className="mt-6 inline-flex rounded-full bg-primary px-6 py-3 text-white hover:bg-secondary transition">
              Book Now
            </Link>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <h3 className="text-xl font-semibold text-slate-900">What we cover</h3>
            <ul className="mt-4 space-y-3 text-slate-600">
              <li>• Full on-site inspection</li>
              <li>• Quality replacement parts</li>
              <li>• Post-service support</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServiceDetail;
