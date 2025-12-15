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
		"inline-flex items-center justify-center rounded-xl font-medium transition duration-200 ease-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#1D0B5B]/25 focus:ring-offset-white disabled:opacity-50 disabled:pointer-events-none active:translate-y-px";
	const variants = {
		default: "bg-[#1D0B5B] hover:bg-[#160847] text-white shadow-sm hover:shadow-md",
		secondary: "bg-white text-[#1D0B5B] hover:bg-[#fbfcff] border border-[#1D0B5B]/15 shadow-sm hover:shadow-md",
	};
	const sizes = {
		sm: "h-9 px-4 text-sm",
		lg: "h-12 px-6 text-base",
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


