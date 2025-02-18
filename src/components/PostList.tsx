// PostList.tsx
import React from 'react';

interface Post {
  id: number;
  title: string;
  body: string;
}

interface PostListProps {
  posts: Post[];
}

export const PostList: React.FC<PostListProps> = ({ posts }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {posts.map((post) => (
        <div key={post.id} className="shadow-lg rounded-xl p-4 bg-white">
          <h2 className="text-lg font-semibold mb-2">{post.title}</h2>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
};

export default PostList;