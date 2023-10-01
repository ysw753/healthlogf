import React, { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((res) => res.json())
      .then((data) => console.log("data", data))
      .catch((err) => console.log("err", err));
  }, []);

  return <div>homeaaasdasdsaa!</div>;
}
