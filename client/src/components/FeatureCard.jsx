function FeatureCard({ title, description }) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 text-slate-800 shadow-sm transition hover:shadow-xl">
      <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary text-2xl font-bold">
        ✓
      </div>
      <h4 className="text-xl font-semibold">{title}</h4>
      <p className="mt-3 text-sm leading-7 text-slate-600">{description}</p>
    </div>
  );
}

export default FeatureCard;
