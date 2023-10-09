import { useEffect, useRef, useState } from "react";

const BoxWindow = ({
  children,
  className,
  active,
}: {
  children: React.ReactNode;
  className?: any;
  active: any;
}) => {
  return (
    <div
      className={`box-window w-[700px] 
                    max-h-[300px]
                    ${active ? "max-h-[800px]" : ""}
                    bg-ivas-light-black 
                    mt-5 p-10 
                    rounded-lg 
                    border-[1px] 
                    border-ivas-light-black 
                    hover:scale-[1.02]
                    transition-height
                    duration-500 
                    ease-int-out 
                    hover:border-[1px] 
                    hover:border-ivas-lime 
                    bg-ivas-light-black-silver 
                    relative
                    
                    `}
    >
      <div className={`content-text h-fit ${className}`}>{children}</div>
    </div>
  );
};

export default BoxWindow;
