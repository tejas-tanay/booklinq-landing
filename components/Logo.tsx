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

	const src = showWordmark ? "/brand/booklinq-wordmark.png" : "/brand/booklinq-mark.png";

	return (
		<div className={`flex items-center gap-2 ${className}`}>
			<img
				src={src}
				alt="Booklinq"
				className="block"
				style={{
					height: iconSize,
					width: showWordmark ? "auto" : iconSize,
					filter: invert ? "brightness(0) invert(1)" : undefined,
				}}
				loading="eager"
			/>
		</div>
	);
}

