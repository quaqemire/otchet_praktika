import { useState } from "react";
import s from './profile-posts.module.scss';
import type { Post } from "../../profile-page";

interface Props {
    posts: Post[];
    onAddPost: (content: string) => void;
}

export const ProfilePosts = ({ posts, onAddPost }: Props) => {
    const [newPost, setNewPost] = useState("");

    const handleSubmit = () => {
        if (!newPost.trim()) return;
        onAddPost(newPost);
        setNewPost("");
    };

    return (
        <div className={s.posts}>
            <h3>Мои публикации</h3>

            <div className={s.createPost}>
                <textarea
                    value={newPost}
                    onChange={e => setNewPost(e.target.value)}
                    placeholder="Написать новый пост..."
                />
                <button onClick={handleSubmit}>Опубликовать</button>
            </div>

            {posts.map(post => (
                <div key={post.id} className={s.postCard}>
                    <p>{post.content}</p>
                </div>
            ))}
        </div>
    );
};
