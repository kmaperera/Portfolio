function Button({
  children,
  variant = "primary",
  ...props
}) {
  const base =
            
    "px-6 py-3 rounded-lg font-semibold transition duration-300 cursor-pointer";

  const styles = {
    primary:
      "bg-cyan-500 hover:bg-cyan-400 text-black",

    secondary:
      "border border-cyan-500 hover:bg-cyan-500 hover:text-black text-white",
  };

  return (
    <button
      className={`${base} ${styles[variant]}`}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;