import React from "react";
import { Outlet, createBrowserRouter } from "react-router-dom";
import NotFound from "../components/NotFound";
import { HomeLogin } from "../pages/HomeLogin";
import SoftwareRoute from "../pages/SoftwareRoute";

const Root = () => {
    return <Outlet />
}


export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        errorElement: <NotFound />,
        children: [
            {
                path: 'auth/dang-nhap',
                element: <HomeLogin />
            },
            {
                path: 'chon-phan-he',
                element: <SoftwareRoute />
            }
        ]
    }
])