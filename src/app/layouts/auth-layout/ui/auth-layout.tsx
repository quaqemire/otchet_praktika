import s from "./auth-layout.module.scss";
import {Outlet} from "react-router-dom";
import {Suspense} from "react";
import {PageLoader} from "@/widgets/page-loader";

export const AuthLayout = () => {
    return (
        <Suspense fallback={<PageLoader/>}>
            <main className={s.content}>
                <Outlet/>
            </main>
        </Suspense>
    );
};
