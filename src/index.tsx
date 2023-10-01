import * as React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App";
import Posts from "./routes/Posts";
import Home from "./routes/Home";
import PostDetail from "./routes/PostDetail";
import SignIn from "./routes/SignIn";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, path: "/", element: <Home /> },
      {
        path: "/posts",

        element: <Posts />,
      },
      {
        path: "/post/:id",
        element: <PostDetail />,
      },
    ],
  },
  {
    path: "/signin",
    element: <SignIn />,
  },
]);

createRoot(document.getElementById("root") as HTMLElement).render(
  <RouterProvider router={router} />
);
