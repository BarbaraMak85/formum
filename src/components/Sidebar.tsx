import React from "react";
import { useWindowDimensions } from "../hooks/useWindowDimensions";

const Sidebar = () => {
  const { width } = useWindowDimensions();
  if (width <= 768) {
    return null;
  }
  return <div>Pasek boczny</div>;
};

export default Sidebar;
