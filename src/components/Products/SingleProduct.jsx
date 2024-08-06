import React from "react";
import { useParams } from "react-router-dom";
import { useGetProductQuery } from "../../features/api/apiSlice";
import { SidePoster } from "../SidePoster/SidePoster";

export const SingleProduct = () => {
  const { id } = useParams();
  const { data } = useGetProductQuery({ id });
  console.log(data)
  return (
    <div>
        <SidePoster poster={''} />
    </div>);
};
