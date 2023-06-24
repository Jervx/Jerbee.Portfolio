import React from "react";

const UnderConstruction = (prop) => {
  return (
    <div className="flex items-center justify-center w-full h-full text-gray-600" {...prop}>
      <div>
        <p> my portfolio is currently under development, expected date of completion will be after July 12 (Graduation)</p>
      </div>
    </div>
  );
};

export default UnderConstruction;
