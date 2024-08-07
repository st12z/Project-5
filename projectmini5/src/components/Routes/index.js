import { Children } from "react";
import LayoutDefault from "../../layout/LayoutDefault";
import Home from "../../pages/Home";
import Topic from "../../pages/Topic";
import Answers from "../../pages/Answers";
import Register from "../../pages/Register";
import Login from "../../pages/Login";
import Logout from "../../pages/Logout";
import PrivateRoutes from "../PrivateRoutes";
import Quiz from "../../pages/Quiz";
import Result from "../../pages/Result";

export const routes = [
  {
    path: "/",
    element: <LayoutDefault />,
    children: [
      {
        path: "/Home",
        element: <Home />,
      },
      {
        path: "/Logout",
        element: <Logout />,
      },
      {
        path: "/Register",
        element: <Register />,
      },
      {
        element: <PrivateRoutes />,
        children: [
          {
            path: "/Topic",
            element: <Topic />,
          },
          {
            path: "/Quiz/:id",
            element: <Quiz />,
          },

          {
            path: "/Answers",
            element: <Answers />,
          },
          {
            path: "/Result/:id",
            element: <Result />,
          },
          {
            path: "/Login",
            element: <Login />,
          },
        ],
      },
    ],
  },
];
