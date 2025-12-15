import * as React from "react";

export const Input = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
	function Input({ className = "", ...props }, ref) {
		const base =
			"w-full rounded-md border bg-white px-3 py-2 text-sm outline-none transition placeholder:text-[#1D0B5B]/40 text-[#1D0B5B] border-[#1D0B5B]/10 focus:border-[#02A6A5]";
		return <input ref={ref} className={[base, className].join(" ")} {...props} />;
	},
);


