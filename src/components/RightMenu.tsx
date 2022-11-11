import React from "react";
import { useWindowDimensions } from "../hooks/useWindowDimensions";

const RightMenu = () => {
  const { width } = useWindowDimensions();
  if (width <= 768) {
    return null;
  }
  return <div>Menu z prawej</div>;
};

export default RightMenu;
