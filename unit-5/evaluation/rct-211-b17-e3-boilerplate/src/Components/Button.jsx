export const Button = ({ colorScheme, variant, size }) => {
	if (colorScheme == undefined) colorScheme = "white";

	if (variant == undefined) variant = "solid";

	switch (variant) {
		case "solid":
			variant = colorScheme;
			var border = colorScheme;
			var color = "white";
			break;

		case "outline":
			variant = "white";
			var border = colorScheme;
			var color = colorScheme;
			break;

		case "ghost":
			variant = "white";
			var border = "white";
			var color = colorScheme;
			break;

		default:
			break;
	}

	if (size == undefined) size = "md";

	switch (size) {
		case "sm":
			var font = "13px";
			var padding = "2px";
			break;

		case "md":
			var font = "16px";
			var padding = "6px";
			break;

		case "lg":
			var font = "20px";
			var padding = "6px 12px";
			break;

		case "xl":
			var font = "24px";
			var padding = "12px 18px";
			break;

			defaul: break;
	}

	return (
		<button
			style={{
				backgroundColor: colorScheme,
				size: size,
				borderRadius: "5px",
				backgroundColor: variant,
				border: `2px solid ${border}`,
				color: color,
        fontSize:font,
        padding:padding
			}}
		>
			Button
		</button>
	);
};
