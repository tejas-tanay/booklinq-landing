import * as React from "react";

type DialogContextValue = {
	open: boolean;
	setOpen: (v: boolean) => void;
};

const DialogContext = React.createContext<DialogContextValue | null>(null);

export function Dialog({
	open = false,
	onOpenChange,
	children,
}: {
	open?: boolean;
	onOpenChange?: (open: boolean) => void;
	children: React.ReactNode;
}) {
	const setOpen = (v: boolean) => onOpenChange?.(v);
	return <DialogContext.Provider value={{ open, setOpen }}>{children}</DialogContext.Provider>;
}

export function DialogTrigger({ asChild, children }: { asChild?: boolean; children: React.ReactNode }) {
	// Consumers control open state; we just render children
	return <>{children}</>;
}

export function DialogContent({
	className = "",
	children,
}: {
	className?: string;
	children: React.ReactNode;
}) {
	const ctx = React.useContext(DialogContext);
	if (!ctx) return null;
	if (!ctx.open) return null;
	return (
		<div className="fixed inset-0 z-50 flex items-center justify-center">
			<div className="absolute inset-0 bg-black/60" onClick={() => ctx.setOpen(false)} />
			<div
				role="dialog"
				aria-modal="true"
				className={["relative z-10 w-full max-w-lg rounded-2xl border border-[#02A6A5]/30 bg-[#1D0B5B] p-6 shadow-xl", className].join(" ")}
			>
				{children}
			</div>
		</div>
	);
}

export function DialogHeader({ children }: { children: React.ReactNode }) {
	return <div className="mb-2">{children}</div>;
}

export function DialogTitle({ children }: { children: React.ReactNode }) {
	return <h2 className="text-xl font-semibold">{children}</h2>;
}

export function DialogDescription({ children, className = "" }: { children: React.ReactNode; className?: string }) {
	return <p className={["text-sm text-white/70", className].join(" ")}>{children}</p>;
}

export function DialogFooter({ children }: { children: React.ReactNode }) {
	return <div className="mt-4 flex justify-end gap-2">{children}</div>;
}


