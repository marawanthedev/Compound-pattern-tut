import React, { PropsWithChildren } from "react";
import "./index.css";

export type Post = {
    id: number;
    title: string;
    content: string;
    user: {
        id: number;
        name: string;
    };
};

type PostCardProps = PropsWithChildren & {
    post: Post;
};

type PostCardContextProps = {
    post: Post;
};


const PostCardContext = React.createContext<PostCardContextProps | undefined>(undefined)

export default function PostCard({ post, children }: PostCardProps) {
    return (
        <PostCardContext.Provider value={{ post }}>
            <div className="card">
                {children}
            </div>
        </PostCardContext.Provider>
    );
}

PostCard.title = function PostCardTitle() {
    const context = React.useContext(PostCardContext)
    return <h2 className="title">Title: {context?.post.title}</h2>
}
PostCard.content = function PostCardContent() {
    const context = React.useContext(PostCardContext)
    return <p className="content">{context?.post.content}</p>
}

PostCard.author = function PostCardAuthor() {
    const context = React.useContext(PostCardContext)
    return <p className="author">Author: {context?.post.user.name}</p>
}

PostCard.buttons = function PostCardButtons() {
    return (
        <div className="buttons">
            <button className="button">Read More</button>
            <button className="button">Comments</button>
        </div>
    );
}