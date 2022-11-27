import Dashboard from '../views/Dashboard';
import Profile from '../views/Profile';
import Users from '../views/Users';

export const routes = [
    { path: "/", Component: <Dashboard /> },
    { path: "/users", Component: <Users /> },
    { path: "/profile", Component: <Profile /> },
]