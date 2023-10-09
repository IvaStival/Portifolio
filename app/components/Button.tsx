import { MouseEventHandler } from "react";

const Button = ({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    onClick?.(e);
  };

  return (
    <button
      onClick={handleClick}
      className={`mt-3 mb-[10px] px-8 py-1 bg-ivas-off-green hover:bg-ivas-light-green hover:text-ivas-off-green text-sm text-ivas-light-green rounded`}
    >
      {children}
    </button>
  );
};

export default Button;
