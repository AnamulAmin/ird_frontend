import React from "react";
import { PiWarningCircleLight } from "react-icons/pi";

export default function page() {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center text-gray-500">
      <PiWarningCircleLight size={64} className="mb-4 text-gray-400" />
      <h3 className="text-xl font-semibold mb-2">No Duas Found</h3>
      <p className="text-sm max-w-md">
        {`Sorry, we couldn't find any Duas at the moment. Please Select a category or check your internet connection.`}
      </p>
    </div>
  );
}
