import React from "react";
import { Loader as LoaderIcon } from "lucide-react";

const Loader = ({ color }) => {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <LoaderIcon
        className={`animate-spin text-${color}`}
        size={36}
        strokeWidth={2.5}
      />
    </div>
  );
};

export default Loader;
