import React, { useEffect, useState } from "react";

const MySelf = () => {
  const [Success, setSuccess] = useState("unreached");

  return Success === "unreached" ? (
    <div> Keep Going </div>
  ) : (
    <div> Keep Improving </div>
  );
};

export default MySelf;