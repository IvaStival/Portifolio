const BoxWindow = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: any;
}) => {
  return (
    <div
      className="box-window w-[700px] 
                    h-fit 
                    bg-ivas-light-black 
                    mt-5 p-10 
                    rounded-lg 
                    border-[1px] 
                    border-ivas-light-black 
                    hover:scale-[1.02]
                    transition-all 
                    duration-200 
                    ease-int-out 
                    hover:border-[1px] 
                    hover:border-ivas-lime 
                    bg-ivas-light-black-silver 
                    relative"
    >
      <div className={`content-text ${className}`}>{children}</div>
    </div>
  );
};

export default BoxWindow;
