import AcRepairImage from '../image/Ac Repair.png';
import AcInstallationImage from '../image/Ac installation.png';
import GasFillingImage from '../image/Gas Filling.png';
import AcMaintenanceImage from '../image/Ac Maintenance.png';

export const serviceData = [
  {
    slug: 'ac-repair',
    serviceName: 'AC Repair',
    description: 'Professional diagnosis, parts replacement and cooling restoration for your AC unit.',
    price: 899,
    image: AcRepairImage,
    details: 'Get quick AC repair with honest pricing and experienced technicians. We fix common AC faults and ensure reliable cooling.',
  },
  {
    slug: 'ac-installation',
    serviceName: 'AC Installation',
    description: 'Safe and fast installation for split and window AC units, with post-installation inspection.',
    price: 1299,
    image: AcInstallationImage,
    details: 'Professional AC installation for your home or office with expert alignment, wiring and commissioning service.',
  },
  {
    slug: 'ac-gas-filling',
    serviceName: 'AC Gas Filling',
    description: 'Certified gas refill service for R22, R32 and R410A with full leak inspection.',
    price: 699,
    image: GasFillingImage,
    details: 'Restore cooling efficiency with safe refrigerant top-up and sealed system checks performed by trained staff.',
  },
  {
    slug: 'ac-maintenance',
    serviceName: 'AC Maintenance',
    description: 'Regular maintenance and cleaning services to keep your AC unit running efficiently.',
    price: 599,
    image: AcMaintenanceImage,
    details: 'Ensure optimal performance and longevity of your AC with our comprehensive maintenance packages.',
  },
  // {
  //   slug: 'electrician',
  //   serviceName: 'Electrician',
  //   description: 'Residential electrical repair, wiring upgrades and home appliance safety checks.',
  //   price: 499,
  //   image: 'https://picsum.photos/id/1025/1000/600',
  //   details: 'Reliable electricians ready to solve wiring issues, lighting faults and switchboard upgrades in a single visit.',
  // },
  // {
  //   slug: 'plumbing',
  //   serviceName: 'Plumbing',
  //   description: 'Complete plumbing solutions including leak repair, pipe fitting and bathroom maintenance.',
  //   price: 399,
  //   image: 'https://picsum.photos/id/1035/1000/600',
  //   details: 'Fast-response plumbing service for blocked drains, leaking taps, water heaters and hygiene installations.',
  // },
];

export const reviewsData = [
  {
    customerName: 'Priya Sharma',
    rating: 5,
    comment: 'CoolCare fixed my AC in one visit. The technician was punctual and the service was affordable.',
    image: 'https://picsum.photos/id/1006/200/200',
  },
  {
    customerName: 'Rohan Patel',
    rating: 5,
    comment: 'The installation was seamless and the follow-up support was excellent. Highly recommended!',
    image: 'https://picsum.photos/id/1001/200/200',
  },
  {
    customerName: 'Anjali Mehta',
    rating: 4,
    comment: 'Great service with neat uniforms and safe handling. The AC now cools better than before.',
    image: 'https://picsum.photos/id/1012/200/200',
  },
];
