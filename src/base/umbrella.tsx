import type { SVGProps } from "react";
const SvgUmbrella = (props: SVGProps<SVGSVGElement>) => (
	<svg
		viewBox="0 0 24 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		{...props}
	>
		<path
			d="M18 19C18 19.7956 17.6839 20.5587 17.1213 21.1213C16.5587 21.6839 15.7956 22 15 22C14.2044 22 13.4413 21.6839 12.8787 21.1213C12.3161 20.5587 12 19.7956 12 19V12M23 12C22.7388 9.26357 21.467 6.72275 19.433 4.87366C17.399 3.02458 14.7489 2 12 2C9.25114 2 6.60096 3.02458 4.56697 4.87366C2.53297 6.72275 1.2612 9.26357 1 12H23Z"
			stroke="currentColor"
			strokeWidth={2}
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
	</svg>
);
export default SvgUmbrella;
