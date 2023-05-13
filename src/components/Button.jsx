const Button = ({ children, rest }) => {
  return (
    <button
      className="border-none outline-none bg-primary-purple text-neutral-white p-4 transition-all duration-300 hover:bg-neutral-offBlack flex items-center justify-center rounded-full z-10"
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
