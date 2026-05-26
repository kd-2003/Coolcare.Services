import { Link, NavLink } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'Services', path: '/services' },
  { label: 'AC Repair', path: '/ac-repair' },
  { label: 'Booking', path: '/booking' },
];

function Navbar() {
  const { user, logout } = useAuth();

  return (
    <header className="bg-white border-b border-slate-200 shadow-sm sticky top-0 z-40">
      <div className="container flex items-center justify-between py-4">
        <Link to="/" className="flex items-center gap-3 text-xl font-bold text-primary">
          <span className="w-10 h-10 rounded-full bg-primary/10 text-primary grid place-items-center">C</span>
          CoolCare Services
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-slate-700">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                isActive ? 'text-primary font-semibold' : 'hover:text-primary transition'
              }
            >
              {item.label}
            </NavLink>
          ))}
          <NavLink to="/ac-installation" className="hover:text-primary transition">
            AC Installation
          </NavLink>
          <NavLink to="/gas-filling" className="hover:text-primary transition">
            Gas Filling
          </NavLink>
        </nav>
        <div className="flex items-center gap-3">
          {user ? (
            <>
              <span className="hidden sm:inline text-sm text-slate-600">Hello, {user.name}</span>
              <button
                onClick={logout}
                className="rounded-full bg-primary px-4 py-2 text-white text-sm hover:bg-secondary transition"
              >
                Logout
              </button>
            </>
          ) : (
            <Link
              to="/login"
              className="rounded-full border border-primary px-4 py-2 text-primary hover:bg-primary/10 transition text-sm"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}

export default Navbar;
