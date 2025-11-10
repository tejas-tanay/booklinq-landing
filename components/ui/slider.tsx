import * as React from "react";

type SliderProps = {
	className?: string;
	value?: number[];
	defaultValue?: number[];
	min?: number;
	max?: number;
	step?: number;
	onValueChange?: (value: number[]) => void;
	"aria-describedby"?: string;
};

export function Slider({
	className = "",
	value,
	defaultValue,
	min = 0,
	max = 100,
	step = 1,
	onValueChange,
	...rest
}: SliderProps) {
	const controlled = Array.isArray(value) && typeof value[0] === "number";
	const [internal, setInternal] = React.useState<number>(defaultValue?.[0] ?? min);
	const current = controlled ? (value as number[])[0] : internal;
	return (
		<input
			type="range"
			className={["w-full h-2 rounded-lg bg-white/10 accent-indigo-400", className].join(" ")}
			min={min}
			max={max}
			step={step}
			value={current}
			onChange={(e) => {
				const v = Number(e.target.value);
				if (!controlled) setInternal(v);
				onValueChange?.([v]);
			}}
			{...rest}
		/>
	);
}


