/* eslint-disable react/jsx-max-props-per-line */
/* eslint-disable max-len */
import {
  Routes, Route,
} from 'react-router-dom'

import {
  DefaultLayout, DashboardLayout,
} from '@/layout'

import {
  Home, DashboardMain, SecondPage, NotFound,
} from '@/pages'

import { RoutesPath } from '@/enums'
const Routing = () => {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path={RoutesPath.PublicHome} element={<DefaultLayout><Home /></DefaultLayout>} />

      {/* Dashboard Routes */}
      <Route path={RoutesPath.DashboardHome} element={<DashboardLayout><DashboardMain /></DashboardLayout>} />
      <Route path={RoutesPath.DashboardSecondPage} element={<DashboardLayout><SecondPage /></DashboardLayout>} />

      {/* 404 */}
      <Route path="*" element={<DefaultLayout><NotFound /></DefaultLayout>} />
    </Routes>
  )
}

export default Routing
