import React from "react";
import Clock from "./Clock";

function App(props) {
  // write your code here
  // hint: It's not necessary to pass props to clock as an argument.
  const { loggedIn } = props;
if (loggedIn) {
  return <Clock />;
}
  else {
    return null;
  }
}

export default App;