import type { SVGProps } from "react";
const SvgChevronsDown = (props: SVGProps<SVGSVGElement>) => (
	<svg
		viewBox="0 0 24 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		{...props}
	>
		<path
			d="M7 13L12 18L17 13M7 6L12 11L17 6"
			stroke="currentColor"
			strokeWidth={2}
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
	</svg>
);
export default SvgChevronsDown;
