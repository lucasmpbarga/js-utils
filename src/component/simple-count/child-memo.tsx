import React, { useRef } from "react";

const ChildMemo = () => {
  console.log("Child rendered");

  const renders = useRef(0);
  renders.current += 1;

  return (
    <div className="bg-red-300 text-black p-4 flex-1 text-lg mt-4">
      <p className="text-2xl">Child Memo</p>
      <p>Renders: {renders.current}</p>
    </div>
  );
};

export default React.memo(ChildMemo);