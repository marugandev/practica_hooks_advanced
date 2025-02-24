import React, { memo } from "react";

const ShowResult = memo(({ text, result }) => {
  console.log("Render ShowResult");
  return (
    <p>
      {text} <strong>{result}</strong>
    </p>
  );
});

export default ShowResult;
