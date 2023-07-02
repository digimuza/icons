const fs = require("fs");
function hexToRGB(h) {
	let r = 0;
	let g = 0;
	let b = 0;

	// 3 digits
	if (h.length === 4) {
		r = `0x${h[1]}${h[1]}`;
		g = `0x${h[2]}${h[2]}`;
		b = `0x${h[3]}${h[3]}`;

		// 6 digits
	} else if (h.length === 7) {
		r = `0x${h[1]}${h[2]}`;
		g = `0x${h[3]}${h[4]}`;
		b = `0x${h[5]}${h[6]}`;
	}

	return `${+r},${+g},${+b}`;
}

const colors = {
	primary: {
		25: "#FCFAFF",
		50: "#F9F5FF",
		100: "#F4EBFF",
		200: "#E9D7FE",
		300: "#D6BBFB",
		400: "#B692F6",
		500: "#9E77ED",
		600: "#7F56D9",
		700: "#6941C6",
		800: "#53389E",
		900: "#42307D",
	},
	gray: {
		25: "#FCFCFD",
		50: "#F9FAFB",
		100: "#F2F4F7",
		200: "#EAECF0",
		300: "#D0D5DD",
		400: "#98A2B3",
		500: "#667085",
		600: "#475467",
		700: "#344054",
		800: "#1D2939",
		900: "#101828",
	},
	error: {
		25: "#FFFBFA",
		50: "#FEF3F2",
		100: "#FEE4E2",
		200: "#FECDCA",
		300: "#FDA29B",
		400: "#F97066",
		500: "#F04438",
		600: "#D92D20",
		700: "#B42318",
		800: "#B42318",
		900: "#7A271A",
	},
	warning: {
		25: "#FFFCF5",
		50: "#FFFAEB",
		100: "#FEF0C7",
		200: "#FEDF89",
		300: "#FEDF89",
		400: "#F59E0B",
		500: "#F79009",
		600: "#DC6803",
		700: "#B54708",
		800: "#93370D",
		900: "#7A2E0E",
	},
	success: {
		25: "#F6FEF9",
		50: "#ECFDF3",
		100: "#D1FADF",
		200: "#A6F4C5",
		300: "#6CE9A6",
		400: "#32D583",
		500: "#12B76A",
		600: "#039855",
		700: "#027A48",
		800: "#05603A",
		900: "#054F31",
	},
	secondary: {
		25: "#FFF5F6",
		50: "#FFF1F3",
		100: "#FFE4E8",
		200: "#FECDD6",
		300: "#FEA3B4",
		400: "#FD6F8E",
		500: "#F63D68",
		600: "#E31B54",
		700: "#C01048",
		800: "#A11043",
		900: "#89123E",
	},
};

const xz = Object.keys(colors).map((key) => {
	const x = Object.keys(colors[key]).map((k) => {
		return `     --${key}-${k}: ${hexToRGB(colors[key][k])};`;
	});

	return x.join("\n");
});

const brandPrimaryTheme = `/* This file is automatically generated do not edit this */

.theme {

     /* Colors */
     --white: 255,255,255;
${xz.join("\n")}

     /* Other */
     --radius: 8px
}`;

fs.writeFileSync("./src/theme.css", brandPrimaryTheme);

const tailwindConfigKeys = Object.keys(colors)
	.map((key) => {
		const x = Object.keys(colors[key])
			.flatMap((k) => {
				const foreground =
					parseInt(k, 10) <= 200
						? `rgb(var(--${key}-700), <alpha-value>)`
						: "rgb(var(--white), <alpha-value>)";

				return [
					[k, `rgb(var(--${key}-${k}), <alpha-value>);`],
					[`${k}f`, foreground],
				];
			})
			.reduce((acc, [k, v]) => {
				acc[k] = v;
				return acc;
			}, {});

		return [key, x];
	})
	.reduce((acc, [k, v]) => {
		acc[k] = v;
		return acc;
	}, {});

console.log(tailwindConfigKeys);