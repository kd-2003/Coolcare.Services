import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ServiceCard from '../components/ServiceCard';
import FeatureCard from '../components/FeatureCard';
import ReviewCard from '../components/ReviewCard';
import ContactForm from '../components/ContactForm';
import { serviceData, reviewsData } from '../data/serviceData';
import AcTechnicianImage from '../image/Ac Technician Image.png';

const features = [
  { title: 'Same Day Service', description: 'Quick response and same-day arrival for urgent AC and home maintenance needs.' },
  { title: 'Affordable Pricing', description: 'Transparent quotes with no hidden costs. Trusted pricing for every budget.' },
  { title: '24/7 Support', description: 'Round-the-clock booking assistance and emergency services across major cities.' },
];

function HomePage() {
  return (
    <section className="container space-y-20 py-12 lg:py-16">
      <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <span className="inline-flex rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">Trusted Home Services</span>
          <h1 className="mt-6 max-w-3xl text-4xl font-semibold text-slate-900 sm:text-5xl">
            Professional AC Repair Services at Your Doorstep
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            Fast, reliable and affordable AC repair and home maintenance services with Indian warmth and professionalism.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link to="/booking" className="rounded-full bg-primary px-6 py-3 text-white shadow-lg shadow-primary/20 transition hover:bg-secondary">
              Book Now
            </Link>
            <a
              href="tel:+919653042235"
              aria-label="Call CoolCare Services at +91 96530 42235"
              className="rounded-full border border-slate-200 bg-white px-6 py-3 text-slate-900 transition hover:border-primary hover:text-primary"
            >
              Call Now
            </a>
            <p className="text-sm text-slate-900 px-6 py-3 col-span-3 bg-slate-200 rounded-lg transition hover:border-primary hover:text-primary">
              Technician Nilesh Prajapati
            </p>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-2xl font-bold text-primary">1200+</h3>
              <p className="mt-2 text-sm text-slate-600">Happy customers</p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-2xl font-bold text-primary">24/7</h3>
              <p className="mt-2 text-sm text-slate-600">Support available</p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-2xl font-bold text-primary">99%</h3>
              <p className="mt-2 text-sm text-slate-600">Service satisfaction</p>
            </div>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="relative rounded-[36px] bg-gradient-to-br from-primary/10 via-white to-slate-100 p-6 shadow-2xl md:p-10">
          <img src={AcTechnicianImage} alt="AC technician" className="h-[420px] w-full rounded-[32px] object-cover" />
          <div className="absolute inset-x-6 bottom-6 rounded-3xl bg-slate-950/90 p-5 text-white shadow-2xl backdrop-blur-lg sm:inset-x-10">
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-200">Premium Service</p>
            <h3 className="mt-3 text-xl font-semibold">Reliable cooling services for your home and family</h3>
          </div>
        </motion.div>
      </div>

      <div className="space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Our Services</p>
            <h2 className="mt-3 text-3xl font-semibold text-slate-900">Complete home service lineup</h2>
          </div>
          <Link to="/services" className="text-sm font-semibold text-primary hover:text-secondary">
            Explore all services
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {serviceData.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </div>

      <div className="space-y-8">
        <div>
          <h2 className="text-3xl font-semibold text-slate-900">Why Choose CoolCare?</h2>
          <p className="mt-3 max-w-2xl text-slate-600">Our service model is built for fast resolution, fair pricing and trusted professionals from the region.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {features.map((feature) => (
            <FeatureCard key={feature.title} title={feature.title} description={feature.description} />
          ))}
        </div>
      </div>

      <div className="space-y-8">
        <div>
          <h2 className="text-3xl font-semibold text-slate-900">Customer Reviews</h2>
          <p className="mt-3 max-w-2xl text-slate-600">Real customers sharing their experience with our on-demand service team.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {reviewsData.map((review) => (
            <ReviewCard key={review.customerName} review={review} />
          ))}
        </div>
      </div>

      <div className="grid gap-10 lg:grid-cols-[0.7fr_0.8fr]">
        <div className="rounded-3xl bg-gradient-to-br from-secondary/10 via-white to-slate-100 p-10 shadow-xl">
          <span className="inline-flex rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">Need help now?</span>
          <h2 className="mt-6 text-3xl font-semibold text-slate-900">Book a technician in minutes</h2>
          <p className="mt-4 text-slate-600">Submit your details and our team will connect you with a certified technician for fast service.</p>
          <div className="mt-8 grid gap-4 text-sm text-slate-600">
            <div className="rounded-3xl bg-white p-5 shadow-sm">
              <strong className="text-slate-900">Fast Booking</strong>
              <p className="mt-2">Complete a booking request and get confirmation quickly.</p>
            </div>
            <div className="rounded-3xl bg-white p-5 shadow-sm">
              <strong className="text-slate-900">Reliable Experts</strong>
              <p className="mt-2">Technicians with experience in AC and home service repair.</p>
            </div>
          </div>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}

export default HomePage;
