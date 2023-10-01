import React from "react";
import Post from "../components/Post";
import { useNavigate } from "react-router-dom";
import { Observer, useObserver } from "mobx-react";
import indexStrore from "../store/indexStrore";

// const posts = [
//   {
//     id: 1,
//     title: "asdasd",
//     content: "dsfjasldfjasiefjlasdjf",
//     createdAt: "2021.02.04",
//   },
//   {
//     id: 2,
//     title: "asdasd",
//     content: "dsfjasldfjasiefjlasdjf",
//     createdAt: "2021.02.04",
//   },
//   {
//     id: 3,
//     title: "asdasd",
//     content: "dsfjasldfjasiefjlasdjf",
//     createdAt: "2021.02.04",
//   },
//   {
//     id: 4,
//     title: "asdasd",
//     content: "dsfjasldfjasiefjlasdjf",
//     createdAt: "2021.02.04",
//   },
//   {
//     id: 5,
//     title: "asdasd",
//     content: "dsfjasldfjasiefjlasdjf",
//     createdAt: "2021.02.04",
//   },
//   {
//     id: 6,
//     title: "asdasd",
//     content: "dsfjasldfjasiefjlasdjf",
//     createdAt: "2021.02.04",
//   },
//   {
//     id: 7,
//     title: "asdasd",
//     content: "dsfjasldfjasiefjlasdjf",
//     createdAt: "2021.02.04",
//   },
//   {
//     id: 8,
//     title: "asdasd",
//     content: "dsfjasldfjasiefjlasdjf",
//     createdAt: "2021.02.04",
//   },
//   {
//     id: 9,
//     title: "asdasd",
//     content: "dsfjasldfjasiefjlasdjf",
//     createdAt: "2021.02.04",
//   },
//   {
//     id: 10,
//     title: "asdasd",
//     content: "dsfjasldfjasiefjlasdjf",
//     createdAt: "2021.02.04",
//   },
//   {
//     id: 11,
//     title: "asdasd",
//     content: "dsfjasldfjasiefjlasdjf",
//     createdAt: "2021.02.04",
//   },
//   {
//     id: 7,
//     title: "asdasd",
//     content: "dsfjasldfjasiefjlasdjf",
//     createdAt: "2021.02.04",
//   },
//   {
//     id: 8,
//     title: "asdasd",
//     content: "dsfjasldfjasiefjlasdjf",
//     createdAt: "2021.02.04",
//   },
//   {
//     id: 9,
//     title: "asdasd",
//     content: "dsfjasldfjasiefjlasdjf",
//     createdAt: "2021.02.04",
//   },
//   {
//     id: 10,
//     title: "asdasd",
//     content: "dsfjasldfjasiefjlasdjf",
//     createdAt: "2021.02.04",
//   },
//   {
//     id: 11,
//     title: "asdasd",
//     content: "dsfjasldfjasiefjlasdjf",
//     createdAt: "2021.02.04",
//   },
// ];
export default function Posts() {
  const { PostStore } = indexStrore();

  const navigate = useNavigate();
  const clickItem = (id: number) => {
    navigate(`/post/${id}`);
  };
  return useObserver(() => (
    <Observer>
      {() => (
        <section className="w-1/2 bg-white m-auto h-full">
          <ul>
            {PostStore.posts.map((post) => (
              <li key={post.id} onClick={() => clickItem(post.id)}>
                <Post post={post} />
              </li>
            ))}
          </ul>
        </section>
      )}
    </Observer>
  ));
}
