import {type FormEvent, useState} from "react";
import s from './registration-page.module.scss';
import {NavLink, useNavigate} from "react-router-dom";

interface IUser {
    email: string;
    password: string;
}

export const RegistrationPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const navigate = useNavigate();

    const handleRegister = (e: FormEvent) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            alert("Пароли не совпадают!");
            return;
        }

        const users = JSON.parse(localStorage.getItem("users") || "[]");
        if (users.some((user: IUser) => user.email === email)) {
            alert("Пользователь с таким email уже существует!");
            return;
        }

        users.push({email, password});
        localStorage.setItem("users", JSON.stringify(users));

        alert("Регистрация прошла успешно!");
        navigate("/auth/login");
    };

    return (
        <div className={s.container}>
            <h2>Регистрация в Wulf</h2>
            <form onSubmit={handleRegister}>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Пароль"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Подтверждение пароля"
                    value={confirmPassword}
                    onChange={e => setConfirmPassword(e.target.value)}
                    required
                />
                <button type="submit">Зарегистрироваться</button>
            </form>

            <p className={s.switch}>
                Уже есть аккаунт? <NavLink to="/auth/login">Войти</NavLink>
            </p>
        </div>
    );
};
