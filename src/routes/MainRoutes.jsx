import { Navigate, Route, Routes } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import GeneralLayout from '../components/layout/GeneralLayout';
import { routes } from './LayoutRoutes';
import Dashboard from '../views/Dashboard';
import Login from '../views/Login';
import Overlay from '../components/Overlay';

const MainRoutes = () => {

    return (
        <>
            <Overlay />
            <Routes>
                <Route exact path='/' element={<PrivateRoute />} >
                    {routes.map(({ path, Component }, i) => (
                        <Route element={<GeneralLayout />} key={i}>
                            {<Route exact
                                path={""}
                                element={<Dashboard />}
                            />}
                            <Route exact path={path} element={Component} />
                        </Route>
                    ))}
                </Route>
                <Route exact path={"/login"} element={<Login />} />
            </Routes>
        </>
    );
}

export default MainRoutes;