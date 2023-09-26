import * as React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Home from "./routes/Home.tsx";
import Posts from "./routes/Posts.tsx";
import PostDetail from "./routes/PostDetail.tsx";
import Login from "./routes/Login.tsx";
import SignIn from "./routes/SignIn.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signIn",
    element: <SignIn />,
  },
  {
    path: "/posts",
    element: <Posts />,
  },
  {
    path: "/posts/:id",
    element: <PostDetail />,
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
