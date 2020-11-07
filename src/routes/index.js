import Dashboard from "../pages/Dashboard";
import PatientRecord from "../pages/PatientRecord";

export const routePaths = {
  dashboard: "/dashboard",
  patientRecord: "/patient-record/:id"
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
    exact: true,
    url: routePaths.patientRecord,
    main: PatientRecord
  },
  {
    title: "Home",
    path: "*",
    url: "*",
    exact: true,
    main: Dashboard
  } // eslint-disable-line
];

export const unAuthRoutes = [];
