import Dashboard from '../views/Dashboard';
import Users from '../views/Users';

export const routes = [
    { path: "/", Component: <Dashboard /> },
    { path: "/users", Component: <Users /> },
]