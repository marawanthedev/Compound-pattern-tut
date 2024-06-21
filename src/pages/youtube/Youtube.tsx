import PostCard, { Post } from "../../PostCard";
import "../../index.css";

const youtubePosts: Post[] = [
  {
    id: 1,
    title: "Youtube post 1",
    content: "hi this is my first",
    user: {
      id: 1,
      name: "marwan",
    },
  },
  {
    id: 2,
    title: "Youtube post 2",
    content: "hi this is my second",
    user: {
      id: 2,
      name: "Faiz",
    },
  },
  {
    id: 3,
    title: "Youtube post 3",
    content: "hi this is my third",
    user: {
      id: 3,
      name: "Ali",
    },
  },
];

export default function Youtube() {
  return (
    <div>
      <h1 className="page-header">Yotube posts</h1>

      <div className="posts-container">
        {youtubePosts.map((post) => (
          <PostCard post={post} >
            <PostCard.title />
            <PostCard.content />
            <PostCard.author />
            <PostCard.buttons />
          </PostCard>
        ))}
      </div>
    </div>
  );
}
