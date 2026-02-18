import s from './page-loader.module.scss'
import {Loader} from "@/shared/ui/loader";

export const PageLoader = () => {
    return (
        <div className={s.container}>
            <Loader />
        </div>
    );
};

