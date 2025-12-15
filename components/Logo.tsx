export default function Logo({
	className = "",
	showWordmark = true,
	size = "md",
	invert = false,
}: {
	className?: string;
	showWordmark?: boolean;
	size?: "sm" | "md" | "lg";
	invert?: boolean;
}) {
	const iconSizes = { sm: 24, md: 32, lg: 48 };
	const iconSize = iconSizes[size];
	
	return (
		<div className={`flex items-center gap-2 ${className}`}>
			{/* Logo icon: Purple L shape with teal arrow */}
			<svg width={iconSize} height={iconSize} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
				{/* Purple L shape (corner) */}
				<rect x="0" y="0" width="12" height="32" fill="#1D0B5B" />
				<rect x="0" y="20" width="32" height="12" fill="#1D0B5B" />
				{/* Teal arrow pointing diagonally up-right */}
				<path
					d="M14 18 L22 10 M22 10 L22 14 M22 10 L18 10"
					stroke="#02A6A5"
					strokeWidth="2.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</svg>
			{showWordmark && (
				<span className={`font-semibold tracking-tight lowercase ${invert ? "text-white" : "text-[#1D0B5B]"}`}>
					booklinq
				</span>
			)}
		</div>
	);
}

