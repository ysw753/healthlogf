import React from "react";
import { useParams } from "react-router-dom";

export default function PostDetail() {
  const param = useParams();

  return <section>{param.id}</section>;
}
