import React from 'react';

const Dashboard = React.lazy(() => import('./admins/dashboard/Dashboard'));
const Admin = React.lazy(() => import('./admins/admin/Admin'));
const Service = React.lazy(() => import('./admins/service/Service'));
const ServiceAdd = React.lazy(() => import('./admins/service/ServiceAdd'));
const Review = React.lazy(() => import('./admins/review/Review'));
const Booking = React.lazy(() => import('./admins/booking/Booking'));

const routes = [
  { path: '/admin', exact: true, name: 'Admin' },
  { path: '/admin/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/admin/admin', exact: true, name: 'Admin', component: Admin },
  { path: '/admin/service/all', exact: true, name: 'Service', component: Service },
  { path: '/admin/service/add', exact: true, name: 'Service', component: ServiceAdd },
  { path: '/admin/review/add', exact: true, name: 'Review', component: Review },
  { path: '/admin/booking/:id', exact: true, name: 'Booking', component: Booking },
];

export default routes;
