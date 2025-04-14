import React, { useState } from "react";

export default function SwitchToggle() {
  const [enabled, setEnabled] = useState(false);

  return (
    <button
      onClick={() => setEnabled(!enabled)}
      className={`relative inline-flex h-[12px] w-[40px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-300 focus:outline-none ${
        enabled ? "bg-green-500" : "bg-gray-300"
      }`}
    >
      <span
        className={`pointer-events-none inline-block h-[22px] w-[22px] transform rounded-full  shadow-lg absolute top-1/2 -translate-y-1/2  transition-all duration-500 ease-in-out ${
          !enabled ? "-left-[11px] bg-gray-dark" : "left-[25px] bg-green-600"
        }`}
      />
    </button>
  );
}
