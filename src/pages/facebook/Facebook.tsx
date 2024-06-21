import PostCard, { Post } from "../../PostCard";
import "../../index.css";

const facebookPosts: Post[] = [
    {
        id: 1,
        title: "Facebook post 1",
        content: "hi this is my first",
        user: {
            id: 1,
            name: "marwan",
        },
    },
    {
        id: 2,
        title: "Facebook post 2",
        content: "hi this is my second",
        user: {
            id: 2,
            name: "Ahmed",
        },
    },
    {
        id: 3,
        title: "Facebook post 3",
        content: "hi this is my third",
        user: {
            id: 3,
            name: "Ali",
        },
    },
];

export default function Facebook() {
    return (
        <div>
            <h1 className="page-header">Facebook posts</h1>

            <div className="posts-container">
                {facebookPosts.map((post) => (
                    <PostCard post={post} >
                        <PostCard.title />
                        <PostCard.content />
                        <PostCard.buttons />
                    </PostCard>
                ))}
            </div>
        </div>
    );
}
