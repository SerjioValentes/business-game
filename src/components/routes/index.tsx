import HomePage from "../pages/main";
import LogInPage from "../pages/login";


export const mainRoutes = [
    {
        path: '/',
        text: 'Главная',
        // icon: CalendarBlankOutline,
        component: <HomePage/>,
    },

];

export const authRoutes = [
    {
        path: '/login',
        component: <LogInPage />,
    },
];
