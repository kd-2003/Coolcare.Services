import { Link } from 'react-router-dom';

function ServiceCard({ service }) {
  return (
    <div className="card-glow rounded-3xl border border-slate-200 p-6 shadow-xl transition hover:-translate-y-1 hover:shadow-2xl">
      <img
        src={service.image}
        alt={service.serviceName}
        className="h-52 w-full rounded-3xl object-cover"
        onError={(e) => { e.target.onerror = null; e.target.src = 'https://picsum.photos/seed/fallback/1000/600'; }}
      />
      <div className="mt-5 space-y-3">
        <div className="flex items-center justify-between text-sm text-slate-600">
          <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-primary">{service.serviceName}</span>
          <span className="font-semibold">₹{service.price}</span>
        </div>
        <h3 className="text-xl font-semibold text-slate-900">{service.serviceName}</h3>
        <p className="text-sm leading-6 text-slate-600">{service.description}</p>
        <Link
          to={`/service/${service.slug}`}
          className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white hover:bg-secondary transition"
        >
          Book Service
        </Link>
      </div>
    </div>
  );
}

export default ServiceCard;
