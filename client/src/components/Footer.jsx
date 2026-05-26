import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-10">
      <div className="container grid gap-8 md:grid-cols-3">
        <div>
          <h3 className="text-white text-xl font-semibold">CoolCare Services</h3>
          <p className="mt-3 text-sm leading-7">
            Bringing trusted AC repair, installation, gas filling, electrical and plumbing services to your doorstep with Indian hospitality and care.
          </p>
        </div>
        <div>
          <h4 className="text-white text-lg font-semibold">Quick Links</h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link to="/services" className="hover:text-primary transition">All Services</Link></li>
            <li><Link to="/booking" className="hover:text-primary transition">Book Now</Link></li>
            <li><Link to="/ac-repair" className="hover:text-primary transition">AC Repair</Link></li>
            <li><Link to="/ac-installation" className="hover:text-primary transition">Installation</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white text-lg font-semibold">Contact</h4>
          <p className="mt-4 text-sm">Phone: +91 9653042235</p>
          <p className="text-sm">Email: kuldeepkumar07219@gmail.com</p>
          <p className="text-sm">Location: Sultanpur, Uttar Pradesh, India</p>
          <div className="flex items-center gap-3 mt-4">
            <span className="w-9 h-9 grid place-items-center rounded-full bg-primary text-white">F</span>
            <span className="w-9 h-9 grid place-items-center rounded-full bg-primary text-white">I</span>
            <span className="w-9 h-9 grid place-items-center rounded-full bg-primary text-white">L</span>
          </div>
        </div>
      </div>
      <div className="container border-t border-slate-800 mt-8 pt-6 text-xs text-slate-500">
        © 2026 CoolCare Services. Crafted for fast home service booking with care.
      </div>
    </footer>
  );
}

export default Footer;
