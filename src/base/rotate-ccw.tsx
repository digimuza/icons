import type { SVGProps } from "react";
const SvgRotateCcw = (props: SVGProps<SVGSVGElement>) => (
	<svg
		viewBox="0 0 24 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		{...props}
	>
		<path
			d="M1 3.99995V9.99995M1 9.99995H7M1 9.99995L5.64 5.63995C7.02091 4.26137 8.81245 3.36892 10.7447 3.09707C12.6769 2.82521 14.6451 3.18868 16.3528 4.13271C18.0605 5.07674 19.4152 6.55019 20.2126 8.33105C21.0101 10.1119 21.2072 12.1037 20.7742 14.0063C20.3413 15.9089 19.3017 17.6193 17.8121 18.8797C16.3226 20.1401 14.4637 20.8823 12.5157 20.9944C10.5677 21.1065 8.63598 20.5825 7.01166 19.5013C5.38734 18.4201 4.15839 16.8403 3.51 14.9999"
			stroke="currentColor"
			strokeWidth={2}
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
	</svg>
);
export default SvgRotateCcw;
