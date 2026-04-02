// import DashboardPage from '@/pages/dashboards/page';

// import { Layout as KioskPage } from '@/pages/kiosk/default';



// import { Navigate, Route, Routes } from 'react-router';

// export function AppRoutingSetup() {
//   return (
//     <Routes>
//       <Route element={<RequireAuth />}>
//         <Route element={<Demo5Layout />}>
//           <Route path="/" element={<Navigate to="/dashboard" />} />
//           <Route path="/dashboard" element={<DashboardPage />} />

//           {/* Patient */}
//           <Route path="/patient" element={<PatientListPage />} />
//           <Route path="/patient/create" element={<PatientCreateLayout />} />
//           <Route path="/patient/:id" element={<PatientDetailPage />} />


//         </Route>
//       </Route>
//       <Route path="error/*" element={<ErrorRouting />} />
//       <Route path="auth/*" element={<AuthRouting />} />
//       <Route path="*" element={<Navigate to="/error/404" />} />
//     </Routes>
//   );
// }
