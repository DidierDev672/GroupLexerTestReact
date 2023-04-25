import React from "react";
import { createBrowserRouter, RouterProvider  } from "react-router-dom";
import Layout from "../views/Layout";
import Home from "../views/Home";
import Employee from "../views/Employee";

import "../App.css";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/employee",
        element: <Employee />
    }
]);

const App = () => {
    return(
        <Layout>
            <RouterProvider router={router}/>
        </Layout>
    );
};

export default App;