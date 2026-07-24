import React from "react";

const Comment = ({ data }) => {
  const { author, text, replies } = data;

  return (
    <div className="flex shadow-sm bg-gray-200 rounded-full p-2 m-2">
      <img className="w-12 h-12 rounded-full" alt="user" src={author.avatar} />
      <div className="px-3">
        <p className="font-bold">{author?.name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Comment;
