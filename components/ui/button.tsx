import * as React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
	variant?: "default" | "secondary";
	size?: "sm" | "lg";
	asChild?: boolean;
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(function Button(
	{ className = "", variant = "default", size, asChild, children, ...props },
	ref,
) {
	const base =
		"inline-flex items-center justify-center rounded-md font-medium transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500/40 disabled:opacity-50 disabled:pointer-events-none";
	const variants = {
		default: "bg-indigo-600 hover:bg-indigo-500 text-white",
		secondary: "bg-white/10 text-white hover:bg-white/20 border border-white/10",
	};
	const sizes = {
		sm: "h-8 px-3 text-sm",
		lg: "h-11 px-5 text-base",
	};
	const cls = [base, variants[variant] ?? variants.default, size ? sizes[size] : "", className]
		.filter(Boolean)
		.join(" ");

	if (asChild && React.isValidElement(children)) {
		return React.cloneElement(children as React.ReactElement<any>, {
			className: [cls, (children as any).props?.className ?? ""].join(" "),
		});
	}

	return (
		<button ref={ref} className={cls} {...props}>
			{children}
		</button>
	);
});


