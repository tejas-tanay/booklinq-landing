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
		"inline-flex items-center justify-center rounded-md font-medium transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#02A6A5]/40 disabled:opacity-50 disabled:pointer-events-none";
	const variants = {
		default: "bg-[#02A6A5] hover:bg-[#1fb8b7] text-[#1D0B5B]",
		secondary: "bg-transparent text-[#02A6A5] hover:bg-[#02A6A5]/10 border border-[#02A6A5]/40",
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


