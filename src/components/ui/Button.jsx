"use client";

export default function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  onClick,
  className = "",
  ...props
}) {
  const base =
    "inline-flex items-center justify-center font-semibold rounded transition-all duration-200 cursor-pointer";

  const variants = {
    primary: "bg-cyan-600 text-white hover:bg-cyan-700 border border-cyan-600",
    outline:
      "bg-transparent text-cyan-600 border border-cyan-600 hover:bg-cyan-600 hover:text-white",
    white:
      "bg-white text-cyan-700 border border-white hover:bg-cyan-50",
    ghost: "bg-transparent text-white border border-white hover:bg-white/20",
  };

  const sizes = {
    sm: "px-4 py-1.5 text-sm",
    md: "px-6 py-2.5 text-sm",
    lg: "px-8 py-3 text-base",
  };

  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={classes} {...props}>
      {children}
    </button>
  );
}
