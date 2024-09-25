import { LoaderCircle } from "lucide-react";
import React from "react";

function Loading() {
  return (
    <div className="w-screen h-screen flex justify-center items-center overflow-hidden">
      <LoaderCircle className="text-bakhla-red w-6 h-6 animate-spin" />
    </div>
  );
}

export default Loading;
