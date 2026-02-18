import {Route, Routes} from "react-router-dom";
import {lazy} from "react";
import {AuthLayout} from "@/app/layouts/auth-layout";
import {MainLayout} from "@/app/layouts/main-layout";

// PAGES
const LoginPage = lazy(() =>
    import('@/pages/auth/login-page').then((module) => ({default: module.LoginPage})),
);
const RegistrationPage = lazy(() =>
    import('@/pages/auth/registration-page').then((module) => ({default: module.RegistrationPage})),
);
const ProfilePage = lazy(() =>
    import('@/pages/profile-page').then((module) => ({default: module.ProfilePage})),
);


export const AppRouter = () => {
    return (
        <Routes>
            <Route path={'/'} element={<MainLayout/>}>
                <Route index element={<ProfilePage/>}/>
            </Route>

            <Route path={'/auth'} element={<AuthLayout/>}>
                <Route path="login" element={<LoginPage/>}/>
                <Route path="registration" element={<RegistrationPage/>}/>
            </Route>
        </Routes>
    );
};

