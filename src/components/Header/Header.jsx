import React, { memo } from "react";

const Header = memo(() => {
  console.log("Render Header");

  return (
    <header>
      <h1>hooks_advanced</h1>
    </header>
  );
});

export default Header;
