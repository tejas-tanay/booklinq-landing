import * as React from "react";

export function Card({ className = "", ...props }: React.HTMLAttributes<HTMLDivElement>) {
	return <div className={["rounded-2xl border bg-white border-[#1D0B5B]/10 shadow-sm", className].join(" ")} {...props} />;
}

export function CardHeader({ className = "", ...props }: React.HTMLAttributes<HTMLDivElement>) {
	return <div className={["p-6", className].join(" ")} {...props} />;
}

export function CardTitle({ className = "", ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
	return <h3 className={["text-lg font-semibold", className].join(" ")} {...props} />;
}

export function CardDescription({ className = "", ...props }: React.HTMLAttributes<HTMLParagraphElement>) {
	return <p className={["text-sm text-[#1D0B5B]/60", className].join(" ")} {...props} />;
}

export function CardContent({ className = "", ...props }: React.HTMLAttributes<HTMLDivElement>) {
	return <div className={["px-6 pb-6", className].join(" ")} {...props} />;
}


