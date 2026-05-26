import { Link } from 'react-router-dom';

const problems = [
  { title: 'AC Not Cooling', description: 'Temperature remains warm even with running compressor.', price: '₹999 onwards' },
  { title: 'Water Leakage', description: 'Dripping or pooling water around the indoor unit.', price: '₹699 onwards' },
  { title: 'Noise Issue', description: 'Loud operational sounds from the AC unit.', price: '₹799 onwards' },
  { title: 'Compressor Problem', description: 'System failure due to compressor malfunction.', price: '₹1499 onwards' },
];

function ACRepair() {
  return (
    <section className="container py-16">
      <div className="grid gap-10 lg:grid-cols-[0.95fr_0.8fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">AC Repair Services</p>
          <h1 className="mt-4 text-4xl font-semibold text-slate-900">AC Repair Services</h1>
          <p className="mt-6 text-slate-600 leading-8">
            Our AC repair team specializes in diagnosing problems quickly and restoring your cooling system with trained experts and genuine parts.
          </p>
          <div className="mt-10 space-y-6">
            {problems.map((problem) => (
              <div key={problem.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex items-center justify-between gap-6">
                  <h3 className="text-xl font-semibold text-slate-900">{problem.title}</h3>
                  <span className="rounded-full bg-primary/10 px-4 py-2 text-primary">{problem.price}</span>
                </div>
                <p className="mt-3 text-slate-600">{problem.description}</p>
                <p className="mt-4 text-sm text-slate-500">Service Benefits: fast fix, home visit, reliable follow-up.</p>
              </div>
            ))}
          </div>
          <Link to="/booking" className="mt-8 inline-flex rounded-full bg-primary px-6 py-3 text-white hover:bg-secondary transition">
            Book Service
          </Link>
        </div>
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h3 className="text-2xl font-semibold text-slate-900">Why Book Repair?</h3>
          <ul className="mt-6 space-y-3 text-slate-600">
            <li>• Preserve AC life and efficiency</li>
            <li>• Avoid costly breakdowns during peak season</li>
            <li>• Professional troubleshooting and secure repairs</li>
          </ul>
          <div className="mt-8 rounded-3xl bg-slate-50 p-6">
            <h4 className="font-semibold text-slate-900">Emergency care</h4>
            <p className="mt-3 text-sm text-slate-600">Contact our technical team anytime for urgent cooling restoration.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ACRepair;
