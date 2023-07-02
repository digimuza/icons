import type { SVGProps } from "react";
const SvgFilm = (props: SVGProps<SVGSVGElement>) => (
	<svg
		viewBox="0 0 24 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		{...props}
	>
		<path
			d="M7 2V22M17 2V22M2 12H22M2 7H7M2 17H7M17 17H22M17 7H22M4.18 2H19.82C21.024 2 22 2.97602 22 4.18V19.82C22 21.024 21.024 22 19.82 22H4.18C2.97602 22 2 21.024 2 19.82V4.18C2 2.97602 2.97602 2 4.18 2Z"
			stroke="currentColor"
			strokeWidth={2}
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
	</svg>
);
export default SvgFilm;
