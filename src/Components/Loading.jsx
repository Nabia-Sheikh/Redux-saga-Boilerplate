import React from "react";
export default function Loading({message}) {
  return (
    <div className="loading" style={{marginTop : "100px"}}>
      <h4>{message}</h4>
    </div>
  );
}
