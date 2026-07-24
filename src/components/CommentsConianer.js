import React from "react";
import { mockComments } from "../mockData/mockComments";
import Comment from "./Comment";
import CommentList from "./CommentList";

const CommentsConianer = () => {
  return (
    <div className="m-5 p-2">
      <h1 className="text-2xl font-bold">Comments: </h1>
      <CommentList comments={mockComments} />
    </div>
  );
};

export default CommentsConianer;
