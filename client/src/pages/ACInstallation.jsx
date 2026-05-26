import { Link } from 'react-router-dom';

const installationTypes = [
  { title: 'Split AC Installation', price: '₹1,799', description: 'Complete wall mounting, drainage setup and power connection for split AC units.' },
  { title: 'Window AC Installation', price: '₹1,299', description: 'Professional window AC installation with secure fitting and safety checks.' },
];

const processSteps = ['Schedule site inspection', 'Position and secure unit', 'Connect wiring and drainage', 'Test cooling and finish'];

function ACInstallation() {
  return (
    <section className="container py-16">
      <div className="mb-10">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">AC Installation</p>
        <h1 className="mt-4 text-4xl font-semibold text-slate-900">Split & Window AC Installation</h1>
        <p className="mt-4 max-w-2xl text-slate-600 leading-7">
          Expert installation for split and window air conditioners. We ensure safe electrical setup and hassle-free commissioning.
        </p>
      </div>
      <div className="grid gap-10 lg:grid-cols-[0.9fr_0.75fr]">
        <div className="space-y-6">
          {installationTypes.map((item) => (
            <div key={item.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <h2 className="text-2xl font-semibold text-slate-900">{item.title}</h2>
                  <p className="mt-3 text-slate-600">{item.description}</p>
                </div>
                <span className="rounded-full bg-primary/10 px-4 py-2 text-primary">{item.price}</span>
              </div>
            </div>
          ))}
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-semibold text-slate-900">Installation Process</h2>
            <ol className="mt-5 space-y-4 text-slate-600">
              {processSteps.map((step, index) => (
                <li key={step} className="flex gap-4 rounded-3xl bg-slate-50 p-4">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white">{index + 1}</span>
                  <p>{step}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h3 className="text-xl font-semibold text-slate-900">Installation Benefits</h3>
          <ul className="mt-6 space-y-3 text-slate-600">
            <li>• Safety checked electric connections</li>
            <li>• Leak-proof drainage alignment</li>
            <li>• Optimal cooling performance</li>
          </ul>
          <Link to="/booking" className="mt-8 inline-flex rounded-full bg-primary px-6 py-3 text-white hover:bg-secondary transition">
            Book Installation
          </Link>
        </div>
      </div>
    </section>
  );
}

export default ACInstallation;
