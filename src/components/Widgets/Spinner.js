import React, { useState } from "react";
import { ThreeDots } from "react-loader-spinner";

export const Spinner = () => {
  
  const [visibility, setVisibility] = useState(true);

  setTimeout(() => {
    setVisibility(false)
  }, 2000);

  return (
    <ThreeDots
      height="80"
      width="80"
      radius="9"
      color="#212121"
      ariaLabel="three-dots-loading"
      wrapperStyle={{}}
      wrapperClassName=""
      visible={visibility}
    />
  );
};
