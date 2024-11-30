"use client";

import ClipLoader from "react-spinners/ClimbingBoxLoader";
import { useEffect, useState } from "react";

function BuildLoader() {
  const [screen, setScreen] = useState(0);

  useEffect(() => {
    const updateScreenSize = () => {
      setScreen(window.innerWidth);
    };

    updateScreenSize();
    window.addEventListener("resize", updateScreenSize);

    return () => window.removeEventListener("resize", updateScreenSize);
  }, []);
  const size = screen < 400 ? 30 : 50;
  return (
    <div className="flex justify-center pt-40">
      <ClipLoader
        color="#ec1254"
        size={size}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
}

export default BuildLoader;
