import type { SVGProps } from "react";
const SvgUnlock = (props: SVGProps<SVGSVGElement>) => (
	<svg
		viewBox="0 0 24 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		{...props}
	>
		<path
			d="M7 10.9999V6.99991C6.99875 5.75996 7.45828 4.56378 8.28937 3.64358C9.12047 2.72338 10.2638 2.14481 11.4975 2.0202C12.7312 1.89558 13.9671 2.23381 14.9655 2.96922C15.9638 3.70463 16.6533 4.78476 16.9 5.99991M5 10.9999H19C20.1046 10.9999 21 11.8953 21 12.9999V19.9999C21 21.1045 20.1046 21.9999 19 21.9999H5C3.89543 21.9999 3 21.1045 3 19.9999V12.9999C3 11.8953 3.89543 10.9999 5 10.9999Z"
			stroke="currentColor"
			strokeWidth={2}
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
	</svg>
);
export default SvgUnlock;
