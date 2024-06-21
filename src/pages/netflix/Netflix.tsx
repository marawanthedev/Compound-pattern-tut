import PostCard, { Post } from "../../PostCard";
import "../../index.css";

const netflixPosts: Post[] = [
  {
    id: 1,
    title: "Netflix post 1",
    content: "hi this is my first",
    user: {
      id: 1,
      name: "marwan",
    },
  },
  {
    id: 2,
    title: "Netflix post 2",
    content: "hi this is my second",
    user: {
      id: 2,
      name: "Faiz",
    },
  },
  {
    id: 3,
    title: "Netflix post 3",
    content: "hi this is my third",
    user: {
      id: 3,
      name: "Ali",
    },
  },
];

export default function Netflix() {
  return (
    <div className="contaienr">
      <h1 className="page-header">Netflix posts</h1>

      <div className="posts-container">
        {netflixPosts.map((post) => (
          <PostCard post={post} >
            <PostCard.title />
            <PostCard.author />
            <PostCard.content />
            <PostCard.buttons />
          </PostCard>
        ))}
      </div>
    </div>
  );
}
