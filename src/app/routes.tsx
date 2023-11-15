import React from "react";
import { Outlet, createBrowserRouter } from "react-router-dom";
import NotFound from "../components/NotFound";
import { HomeLogin } from "../pages/HomeLogin";

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
            }
        ]
    }
])