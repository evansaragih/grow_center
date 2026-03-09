import { createBrowserRouter } from "react-router";
import Home from "./components/Home";
import BlogDetail from "./components/BlogDetail";
import CourseEnrollment from "./components/CourseEnrollment";
import EventDetail from "./components/EventDetail";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
  {
    path: "/blog/:id",
    Component: BlogDetail,
  },
  {
    path: "/enroll",
    Component: CourseEnrollment,
  },
  {
    path: "/event/:id",
    Component: EventDetail,
  },
]);