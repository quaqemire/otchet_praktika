import {Sidebar} from "@/widgets/sidebar";
import s from "./main-layout.module.scss";
import {Outlet} from "react-router-dom";
import {Suspense} from "react";
import {PageLoader} from "@/widgets/page-loader";

export const MainLayout = () => {
    return (
        <div className={s.layout}>
            <Sidebar/>
            <Suspense fallback={<PageLoader/>}>
                <main className={s.content}>
                    <Outlet/>
                </main>
            </Suspense>
        </div>
    );
};
