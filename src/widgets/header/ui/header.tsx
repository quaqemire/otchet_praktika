import s from './header.module.scss'
import { NavLink } from "react-router-dom";

export const Header = () => {
    return (
        <header className={s.header}>
            <div className={s.brand}>
                Wulf
            </div>

            <div className={s.auth}>
                <NavLink to="/auth/login" className={s.login}>
                    Вход
                </NavLink>

                <NavLink to="/auth/registration" className={s.register}>
                    Регистрация
                </NavLink>
            </div>
        </header>
    );
};
