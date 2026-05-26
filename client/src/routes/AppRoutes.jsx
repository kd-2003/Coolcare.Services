import { Routes, Route } from 'react-router-dom';
import MainLayout from '../components/layouts/MainLayout';
import HomePage from '../pages/HomePage';
import ServicesPage from '../pages/ServicesPage';
import ServiceDetail from '../pages/ServiceDetail';
import ACRepair from '../pages/ACRepair';
import ACInstallation from '../pages/ACInstallation';
import GasFilling from '../pages/GasFilling';
import BookingPage from '../pages/BookingPage';
import Login from '../pages/Login';
import Register from '../pages/Register';
import TechnicianDashboard from '../pages/TechnicianDashboard';
import AdminDashboard from '../pages/AdminDashboard';
import NotFound from '../pages/NotFound';
import ProtectedRoute from '../components/ProtectedRoute';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="services" element={<ServicesPage />} />
        <Route path="service/:slug" element={<ServiceDetail />} />
        <Route path="ac-repair" element={<ACRepair />} />
        <Route path="ac-installation" element={<ACInstallation />} />
        <Route path="gas-filling" element={<GasFilling />} />
        <Route path="booking" element={<BookingPage />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="technician-dashboard" element={<ProtectedRoute><TechnicianDashboard /></ProtectedRoute>} />
        <Route path="admin-dashboard" element={<ProtectedRoute adminOnly><AdminDashboard /></ProtectedRoute>} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;
