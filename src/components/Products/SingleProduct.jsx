import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useGetProductQuery } from "../../features/api/apiSlice";
import { SidePoster } from "../SidePoster/SidePoster";
import { ROUTES } from "../../utils/routes";
import { Product } from "./Product";

export const SingleProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data, isLoading, isFetching, isSuccess } = useGetProductQuery({ id });
  useEffect(() => {
    if (!isFetching && !isLoading && !isSuccess) {
      navigate(ROUTES.HOME); //redirect
    }
  }, [isLoading, isFetching, isSuccess]);
  console.log("data", !data);
  return (
    <div>
      <div style={{display: 'flex', gap: 20}}>
        <SidePoster poster={""} />
        {data !== undefined ? (
          <Product {...data} />
        ) : (
          <section style={{width: "100%", display: 'flex', justifyContent: "center", alignItems: "center" }}>Loading...</section>
        )}
      </div>
    </div>
  );
};
