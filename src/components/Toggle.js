import React from "react";
const Toggle = () => {
  return (
    <div className="flex flex-wrap p-4 justify-center  ">
      <div className="p-16">
        <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 W-24 border-blue-700 hover:border-blue-500 rounded">
          USA
        </button>
      </div>
      <div className="p-16">
        <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 W-24 border-blue-700 hover:border-blue-500 rounded">
          Global
        </button>
      </div>
    </div>
  );
};

export default Toggle;
