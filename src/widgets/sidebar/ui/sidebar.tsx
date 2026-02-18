import s from './sidebar.module.scss';
import { NavLink, useNavigate } from "react-router-dom";
import { LogOutIcon } from "lucide-react";

export const Sidebar = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("currentUser");
        navigate("/auth/login");
    };

    return (
        <aside className={s.sidebar}>
            <ul className={s.sidebar_links}>
                <li>
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            isActive ? `${s.sidebar_link} ${s.active}` : s.sidebar_link
                        }
                    >
                        Профиль
                    </NavLink>
                </li>

                <li>
                    <span className={`${s.sidebar_link} ${s.disabled}`}>
                        Лента (в разработке)
                    </span>
                </li>

                <li>
                    <span className={`${s.sidebar_link} ${s.disabled}`}>
                        Новости (в разработке)
                    </span>
                </li>

                <li>
                    <button
                        onClick={handleLogout}
                        className={`${s.sidebar_link} ${s.button_reset}`}
                    >
                        <div className="flex gap-2 items-center">
                            <LogOutIcon />
                            <span>Выйти</span>
                        </div>
                    </button>
                </li>
            </ul>
        </aside>
    );
};
