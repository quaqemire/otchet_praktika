import { useState } from "react";
import s from './profile-header.module.scss';
import type { UserInterface } from "../../profile-page.tsx";
import { User } from 'lucide-react';

interface Props {
    user: UserInterface;
    onUpdate: (user: UserInterface) => void;
}

export const ProfileHeader = ({ user, onUpdate }: Props) => {
    const [isOpen, setIsOpen] = useState(false);
    const [form, setForm] = useState(user);

    const handleSave = () => {
        onUpdate(form);
        setIsOpen(false);
    };

    return (
        <>
            <div className={s.header}>
                <div className={s.avatar}><User size={100} strokeWidth={0.5} /></div>

                <div className={s.info}>
                    <h2>{user.name}</h2>
                    <p>{user.specialty} • {user.course}</p>
                    <button className={s.editBtn} onClick={() => setIsOpen(true)}>
                        Редактировать профиль
                    </button>
                </div>
            </div>

            {isOpen && (
                <div className={s.modalOverlay}>
                    <div className={s.modal}>
                        <h3>Редактировать профиль</h3>

                        <label>
                            Имя
                            <input
                                value={form.name}
                                onChange={e => setForm({...form, name: e.target.value})}
                            />
                        </label>

                        <label>
                            Специальность
                            <input
                                value={form.specialty}
                                onChange={e => setForm({...form, specialty: e.target.value})}
                            />
                        </label>

                        <label>
                            Курс
                            <input
                                value={form.course}
                                onChange={e => setForm({...form, course: e.target.value})}
                            />
                        </label>

                        <div className={s.modalButtons}>
                            <button className={s.cancelBtn} onClick={() => setIsOpen(false)}>Отмена</button>
                            <button className={s.saveBtn} onClick={handleSave}>Сохранить</button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};
