import React from "react";
import { Poster } from "../Poster/Poster";
import { SideBar } from "../SideBar/SideBar.jsx";
import "../../styles/app.scss";

export const SidePoster = ({ poster }) => {
  return (
    <div className="group">
      <SideBar />
      {poster && <Poster />}
    </div>
  );
};
