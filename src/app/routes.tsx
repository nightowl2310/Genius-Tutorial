import { createBrowserRouter } from "react-router";
import { MainLayout } from "./layouts/MainLayout";
import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import { CoursesPage } from "./pages/CoursesPage";
import { FacultyPage } from "./pages/FacultyPage";
import { ResultsPage } from "./pages/ResultsPage";
import { ContactPage } from "./pages/ContactPage";
import { DownloadAppPage } from "./pages/DownloadAppPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      { index: true, Component: HomePage },
      { path: "about", Component: AboutPage },
      { path: "courses", Component: CoursesPage },
      { path: "faculty", Component: FacultyPage },
      { path: "results", Component: ResultsPage },
      { path: "contact", Component: ContactPage },
      { path: "download-app", Component: DownloadAppPage },
    ],
  },
]);

