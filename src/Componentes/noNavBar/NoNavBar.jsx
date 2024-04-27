import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const NoNavBar = ({ children }) => {
  const location = useLocation();
  const [noNavBar, setNoNavBar] = useState(false);

  useEffect(() => {
    if (location.pathname === "/") {
      setNoNavBar(true);
    } else {
      setNoNavBar(false);
    }
  }, [location]);

  return <div>{noNavBar ? null : children}</div>;
};

export default NoNavBar;
