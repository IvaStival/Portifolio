import { useState } from "react";

const ExpandButton = ({
  className,
  onClick,
}: {
  className?: any;
  onClick?: any;
}) => {
  const [activated, setActivated] = useState(false);

  const handleClick = (e) => {
    setActivated(!activated);
    onClick(e);
  };

  const plus_line =
    "absolute inline-block w-[13px] h-[1.5px] bg-ivas-light-green rounded-xl transition-all duration-300 linear";

  var actvated_style = "rotate-90";

  if (activated) {
    actvated_style = "rotate-0";
  }

  return (
    <div
      onClick={handleClick}
      className={`exp-button-content flex justify-center items-center select-none p-[14px] rounded hover:bg-ivas-off-green cursor-pointer ${className}`}
    >
      <div className={`btn_line ${plus_line}`} />
      <div className={`btn_line2 ${plus_line} ${actvated_style}`} />
    </div>
  );
};

export default ExpandButton;
