import { Link } from 'react-router-dom';

const gasOptions = [
  { name: 'R22 Gas', price: '₹899', details: 'Classic cooling gas for compatible split and window units.' },
  { name: 'R32 Gas', price: '₹999', details: 'More efficient refrigerant with lower environmental impact.' },
  { name: 'R410A Gas', price: '₹1,099', details: 'High-performance gas for modern cooling systems.' },
];

function GasFilling() {
  return (
    <section className="container py-16">
      <div className="mb-10">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">AC Gas Filling</p>
        <h1 className="mt-4 text-4xl font-semibold text-slate-900">Gas Refill for AC Systems</h1>
        <p className="mt-4 max-w-2xl text-slate-600 leading-7">
          Choose the right refrigerant type for your air conditioner. Certified filling with leak inspection and performance testing.
        </p>
      </div>
      <div className="grid gap-8 lg:grid-cols-3">
        {gasOptions.map((gas) => (
          <div key={gas.name} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between gap-3">
              <h2 className="text-2xl font-semibold text-slate-900">{gas.name}</h2>
              <span className="rounded-full bg-primary/10 px-4 py-2 text-primary">{gas.price}</span>
            </div>
            <p className="mt-4 text-slate-600">{gas.details}</p>
            <ul className="mt-6 space-y-3 text-slate-600">
              <li>• Verified refill procedure</li>
              <li>• Leakage and performance checks</li>
              <li>• Trained technicians</li>
            </ul>
          </div>
        ))}
      </div>
      <div className="mt-12 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="text-2xl font-semibold text-slate-900">Ready to refill your AC?</h2>
            <p className="mt-3 text-slate-600">Book gas filling service and let our technicians restore effective cooling quickly.</p>
          </div>
          <Link to="/booking" className="inline-flex rounded-full bg-primary px-6 py-3 text-white hover:bg-secondary transition">
            Book Gas Filling
          </Link>
        </div>
      </div>
    </section>
  );
}

export default GasFilling;
