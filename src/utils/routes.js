import React from 'react';
import MainPage from '../Pages/MainPage';
import AboutUsPage from '../Pages/AboutUsPage';
import ContactsPage from '../Pages/ContactsPage';
import LicensesPage from '../Pages/LicensesPage';
import ProjectsPage from '../Pages/ProjectsPage';
import AutomaticScanningPost from '../Components/MainPageConponents/Blog_automatic_scanning/AutomaticScanningPost';
import LaserScanningPost from '../Components/MainPageConponents/Blog_automatic_scanning/LaserScanningPost';
import AerialPhotographyPost from '../Components/MainPageConponents/Blog_automatic_scanning/AerialPhotographyPost';
import BaseStationsPost from '../Components/MainPageConponents/Blog_automatic_scanning/BaseStationsPost';
import { RouteObject } from 'react-router-dom';
import VacanciesPage from "../Pages/VacanciesPage";
import AdminAuth from "../Pages/AdminAuth";
import ProtectedRoute from "../Components/Admin/ProtectedRoute";
import AdminPage from "../Components/Admin/AdminPage";

const headerLinks = [
    { name: "Главная", path: "/" },
    { name: "О нас", path: "/about-us" },
    { name: "Проекты", path: "/projects" },
    { name: "Контакты", path: "/contacts" },
    { name: "Лицензии", path: "/license" },
    { name: "Вакансии", path: "/vacancies" },
];

const routes: RouteObject[] = [
    {
        path: '/',
        element: <MainPage />,
    },
    {
        path: '/about-us',
        element: <AboutUsPage />,
    },
    {
        path: '/contacts',
        element: <ContactsPage />,
    },
    {
        path: '/customers',
        element: <ContactsPage />,
    },
    {
        path: '/license',
        element: <LicensesPage />,
    },
    {
        path: '/projects',
        element: <ProjectsPage />,
    },
    {
        path: '/blog-automatic-scanning',
        element: <AutomaticScanningPost />,
    },
    {
        path: '/blog-aerial-photography',
        element: <AerialPhotographyPost />,
    },
    {
        path: '/blog-laser-scanning',
        element: <LaserScanningPost />,
    },
    {
        path: '/base-stations',
        element: <BaseStationsPost />,
    },
    {
        path: '/vacancies',
        element: <VacanciesPage />,
    },
    {
        path: '/admin-npo',
        element: <AdminAuth />,
    },

    {
        path: '/admin-panel',
        element:
            <ProtectedRoute>
                <AdminPage />
            </ProtectedRoute>,
    },
];

export { routes, headerLinks };
