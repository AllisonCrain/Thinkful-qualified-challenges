import React from "react";

function Holiday({name, day, month}) {
  return (
  <div>
    {name}: {month} {day}  
  </div>
  );
}

export default Holiday;
