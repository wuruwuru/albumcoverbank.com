import React from "react";
import { useParams } from "react-router-dom";

export default function SingleCover() {
  const { id } = useParams();

  console.log(id);
  return <div>SingleCover</div>;
}
