import React from "react";

import { useActiveHeading } from "use-active-heading";

const App = () => {
  const activeId = useActiveHeading(["#a", "#b"], {});
  return (
    <>
      <p>ActiveId:{activeId}</p>
      <h1 id="a">A</h1>
      <h2 id="b" style={{marginTop: "100vh"}}>B</h2>
    </>
  );
};
export default App;
