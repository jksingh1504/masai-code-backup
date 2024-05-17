import axios from "axios";
import React, { Dispatch, SetStateAction } from "react";
export interface postDetailsInterface {
  name: string;
  author: string;
  image: string;
  content: string;
  category: string;
  like: number;
  dislike: number;
  id: number;
}
interface propInterface {
  postDetails: postDetailsInterface;
  setPosts: Dispatch<SetStateAction<any>>;
}

export const PostCard = ({ postDetails, setPosts }: propInterface) => {
  const { id, name, author, image, content, category, like, dislike } =
    postDetails;
  function handlePostStatus(payload: string) {
    switch (payload) {
      case "like":
      case "dislike":
        postDetails[payload]++;
        setPosts((prev: postDetailsInterface[]) =>
          prev.map((post: postDetailsInterface) => post)
        );
        axios.patch(
          `http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/posts/${id}`,
          postDetails
        );
        break;
      case "delete":
        setPosts((prev: postDetailsInterface[]) =>
          prev.filter((post: postDetailsInterface) => post.id !== id)
        );
        axios.delete(
          `http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/posts/${id}`
        );
        break;
      default:
        break;
    }
  }
  return (
    <div className="post-card">
      <img className="post-image" src={image} alt="" />
      <br />
      <b className="post-name">{name}</b>
      <p className="post-author">{author}</p>
      <p className="post-content">{content}</p>
      <p className="post-category">{category}</p>
      <button
        style={{ backgroundColor: "green", color: "white" }}
        data-testid="like-button"
        onClick={() => handlePostStatus("like")}
      >
        Like
      </button>
      <p className="post-like">{like}</p>
      <button
        style={{ backgroundColor: "yellow" }}
        data-testid="dislike-button"
        onClick={() => handlePostStatus("dislike")}
      >
        Dislike
      </button>
      <p className="post-dislike">{dislike}</p>
      <button
        onClick={() => handlePostStatus("delete")}
        style={{ backgroundColor: "red" }}
        data-testid="delete-button"
      >
        Delete
      </button>
    </div>
  );
};
