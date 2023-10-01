import { observable } from "mobx";
import { Post } from "../model/Post";

interface IPost {
  posts: Post[];
  addPost: (post: Post) => void;
  removePost: (id: number) => void;
}

export const PostStore = observable<IPost>({
  //state
  posts: [
    {
      id: 11,
      title: "asdasd",
      content: "dsfjasldfjasiefjlasdjf",
      createdAt: "2021.02.04",
    },
  ],
  addPost(post) {
    this.posts.push(post);
  },
  removePost(id) {
    this.posts.filter((p) => p.id !== id);
  },
});
