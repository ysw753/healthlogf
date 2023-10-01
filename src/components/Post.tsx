import React from "react";

type Post = {
  id: number;
  title: string;
  content: string;
  createdAt: string;
};
type Props = {
  post: Post;
};

const Post = ({ post }: Props) => {
  const { title, content, createdAt } = post;
  return (
    <div className="border-b hover:bg-gray-200">
      <p>{title}</p>
      <p>{content}</p>

      <p>{createdAt}</p>
    </div>
  );
};

export default Post;
