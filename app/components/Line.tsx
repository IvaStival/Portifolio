const Line = ({ className }: any) => {
  return (
    <div
      className={`line-content bg-ivas-light-silver transform w-0 h-px transition-all duration-300 ease-in-out ${className}`}
    ></div>
  );
};

export default Line;
