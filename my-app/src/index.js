import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import AdminDashboard from "./pages/AdminDashboard";
import UserDashboard from "./pages/UserDashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";
import CreateTicket from "./pages/admin/CreateTicket";
import TicketForm from "./pages/ticket/TicketForm";
import CreateUser from "./pages/admin/users/CreateUser";
import DisplayUsers from "./pages/admin/users/DisplayUsers";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
  {
    path:"/admin",
    element:<AdminDashboard/>
  },
  {
    path:"/user",
    element:<UserDashboard/>
    },
    {
      path:"/login",
      element:<Login/>
    },{
      path:"/register",
      element:<Register/>
    },{
      path:"/create-ticket",
      element:<CreateTicket/>
    },{
      path:"/ticket-form",
      element:<TicketForm/>
    },{
      path:"create-user",
      element:<CreateUser/>
    },{
      path:"/display-users",
      element:<DisplayUsers/>
      
    }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

