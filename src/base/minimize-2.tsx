import type { SVGProps } from "react";
const SvgMinimize2 = (props: SVGProps<SVGSVGElement>) => (
	<svg
		viewBox="0 0 24 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		{...props}
	>
		<path
			d="M4 14H10M10 14V20M10 14L3 21M20 10H14M14 10V4M14 10L21 3"
			stroke="currentColor"
			strokeWidth={2}
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
	</svg>
);
export default SvgMinimize2;
