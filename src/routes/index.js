import Dashboard from "../pages/Dashboard";
import PatientRecord from "../pages/PatientRecord";

export const routePaths = {
  dashboard: "/dashboard",
  patientRecord:'/patient-record'
};

export const authRoutes = [
  {
    title: "Dashboard",
    path: routePaths.dashboard,
    url: routePaths.dashboard,
    exact: true,
    main: Dashboard
  },
  {
    title: "Patient Record",
    path: routePaths.patientRecord,
    url: routePaths.patientRecord,
    exact: true,
    main: PatientRecord
  },
  {
    title: "Home",
    path: "/",
    url: "/",
    exact: true,
    main: Dashboard
  }
  // eslint-disable-line
];

export const unAuthRoutes = [];
