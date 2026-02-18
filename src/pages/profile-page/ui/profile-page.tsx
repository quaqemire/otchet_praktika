import { useState } from "react";
import s from './profile-page.module.scss';
import { ProfileHeader } from "./profile-header";
import { ProfileStats } from "./profile-stats";
import { ProfilePosts } from "./profile-posts";

export interface UserInterface {
    id: string;
    name: string;
    course: string;
    specialty: string;
    posts: number;
    projects: number;
    comments: number;
}

export interface Post {
    id: string;
    content: string;
}

const DEFAULT_USER: UserInterface = {
    id: "1",
    name: ".",
    course: "Например, 2 курс",
    specialty: "Например, Frontend разработка",
    posts: 2,
    projects: 0,
    comments: 0,
};

const DEFAULT_POSTS: Post[] = [
    { id: "1", content: "Сегодня закончил проект Wulf 🔥" },
    { id: "2", content: "Кто разбирается в Zustand?" }
];

export const ProfilePage = () => {
    const [user, setUser] = useState<UserInterface>(() => {
        const stored = localStorage.getItem("currentUser");
        if (stored) {
            try {
                const parsed = JSON.parse(stored);
                return {
                    ...DEFAULT_USER,
                    ...parsed,
                    posts: Number(parsed.posts) || DEFAULT_USER.posts,
                    projects: Number(parsed.projects) || DEFAULT_USER.projects,
                    comments: Number(parsed.comments) || DEFAULT_USER.comments,
                };
            } catch {
                return DEFAULT_USER;
            }
        }
        return DEFAULT_USER;
    });

    const [posts, setPosts] = useState<Post[]>(() => {
        const stored = localStorage.getItem("userPosts");
        if (stored) {
            try {
                const parsed = JSON.parse(stored);
                return Array.isArray(parsed) ? parsed : DEFAULT_POSTS;
            } catch {
                return DEFAULT_POSTS;
            }
        }
        return DEFAULT_POSTS;
    });

    const addPost = (content: string) => {
        const newPost: Post = { id: Date.now().toString(), content };
        const updatedPosts = [newPost, ...posts];
        setPosts(updatedPosts);
        localStorage.setItem("userPosts", JSON.stringify(updatedPosts));

        setUser(prev => {
            const updatedUser = {
                ...prev,
                posts: (typeof prev.posts === "number" ? prev.posts : 0) + 1
            };
            localStorage.setItem("currentUser", JSON.stringify(updatedUser));
            return updatedUser;
        });
    };

    const updateUser = (updatedUser: UserInterface) => {
        setUser(updatedUser);
        localStorage.setItem("currentUser", JSON.stringify(updatedUser));
    };

    return (
        <div className={s.profile}>
            <ProfileHeader user={user} onUpdate={updateUser} />
            <ProfileStats user={user} />
            <ProfilePosts posts={posts} onAddPost={addPost} />
        </div>
    );
};
