import s from "./profile-stats.module.scss";
import type {UserInterface} from "../../profile-page.tsx";

export const ProfileStats = ({user}: {user: UserInterface}) => {
    return (
        <div className={s.stats}>
            <div className={s.stat}>
                <span>{user.posts}</span>
                <p>Публикации</p>
            </div>

            <div className={`${s.stat} ${s.disabled}`}>
                <span>–</span>
                <p>Проектов (в разработке)</p>
            </div>

            <div className={`${s.stat} ${s.disabled}`}>
                <span>–</span>
                <p>Комментарии (в разработке)</p>
            </div>
        </div>
    );
};
