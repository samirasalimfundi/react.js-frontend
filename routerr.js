import * as React from "react";


import {
  createBrowserRouter,
} from "react-router-dom";
import App from "./App";
import Login from "./pages/Login";
import ProtectedRoute from "./Util/ProtectedRoute";
import Students from "./pages/Students";
import Courses from "./pages/Courses";
import Lectures from "./pages/Lectures";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/home",
    element: <ProtectedRoute>
          <App />
    </ProtectedRoute>,

    children: [
      {
        path: "/home/",
        element: <Students />
      },
      {
        path: "/home/courses",
        element: <Courses />
      },
      {
        path: "/home/lectures",
        element: <Lectures />
      },
    ],
  },
    
])

export default router;