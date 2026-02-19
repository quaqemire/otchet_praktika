import {type FormEvent, useState} from "react";
import s from './login-page.module.scss';
import { NavLink, useNavigate } from "react-router-dom";

interface IUser {
    email: string;
    password: string;
}

export const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = (e: FormEvent) => {
        e.preventDefault();

        const users = JSON.parse(localStorage.getItem("users") || "[]");
        const user = users.find((user: IUser) => user.email === email && user.password === password);

        if (user) {
            alert("Вход выполнен успешно!");
            localStorage.setItem("currentUser", JSON.stringify(user));
            navigate("/");
        } else {
            alert("Неверный email или пароль!");
        }
    };

    return (
            <div className={s.container}>
                <h2>Вход в Wulf</h2>
                <form onSubmit={handleLogin}>
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
                    <button type="submit">Войти</button>
                </form>

                <p className={s.switch}>
                    Нет аккаунта? <NavLink to="/auth/registration">Регистрация</NavLink>
                </p>
            </div>
    );
};
