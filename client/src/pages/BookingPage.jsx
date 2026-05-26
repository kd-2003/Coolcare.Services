import BookingForm from '../components/BookingForm';

function BookingPage() {
  return (
    <section className="container py-16">
      <div className="grid gap-10 lg:grid-cols-[0.95fr_0.8fr] lg:items-start">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">Service Booking</p>
          <h1 className="mt-4 text-4xl font-semibold text-slate-900">Book Your AC & Home Service</h1>
          <p className="mt-4 max-w-2xl text-slate-600 leading-7">
            Complete the booking form with your details and preferred date. Our service coordinator will confirm your appointment shortly.
          </p>
          <div className="mt-10 space-y-6 rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm">
            <div>
              <h2 className="text-xl font-semibold text-slate-900">Available Services</h2>
              <p className="mt-3 text-slate-600">AC Repair, installation, gas filling, electrician and plumbing services all available under one roof.</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl bg-white p-5 shadow-sm">
                <h3 className="font-semibold text-slate-900">Quick Response</h3>
                <p className="mt-2 text-sm text-slate-600">We strive to schedule service within 24 hours.</p>
              </div>
              <div className="rounded-3xl bg-white p-5 shadow-sm">
                <h3 className="font-semibold text-slate-900">Transparent Price</h3>
                <p className="mt-2 text-sm text-slate-600">Receive honest pricing before service begins.</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <BookingForm />
        </div>
      </div>
    </section>
  );
}

export default BookingPage;
