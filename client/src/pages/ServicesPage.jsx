import { useEffect, useState } from 'react';
import ServiceCard from '../components/ServiceCard';
import { serviceData } from '../data/serviceData';
import api from '../services/api';
import Loader from '../components/Loader';

function ServicesPage() {
  const [services, setServices] = useState(serviceData);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const loadServices = async () => {
      setLoading(true);
      try {
        const response = await api.get('/services');
        if (response.data.length) setServices(response.data.map((item) => ({
          ...item,
          slug: item.serviceName.toLowerCase().replace(/\s+/g, '-'),
        })));
      } catch (error) {
        console.warn('Service API not available, using local data');
      }
      setLoading(false);
    };

    loadServices();
  }, []);

  return (
    <section className="container py-14">
      <div className="mb-10 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">Our Services</p>
        <h1 className="mt-4 text-4xl font-semibold text-slate-900">Browse all home service categories</h1>
        <p className="mt-3 max-w-2xl mx-auto text-slate-600">Choose a service that fits your requirement and book online with confidence.</p>
      </div>
      {loading ? (
        <Loader />
      ) : (
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      )}
    </section>
  );
}

export default ServicesPage;
