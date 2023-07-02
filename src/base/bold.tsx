import type { SVGProps } from "react";
const SvgBold = (props: SVGProps<SVGSVGElement>) => (
	<svg
		viewBox="0 0 24 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		{...props}
	>
		<path
			d="M6 12H14C15.0609 12 16.0783 11.5786 16.8284 10.8284C17.5786 10.0783 18 9.06087 18 8C18 6.93913 17.5786 5.92172 16.8284 5.17157C16.0783 4.42143 15.0609 4 14 4H6V12ZM6 12H15C16.0609 12 17.0783 12.4214 17.8284 13.1716C18.5786 13.9217 19 14.9391 19 16C19 17.0609 18.5786 18.0783 17.8284 18.8284C17.0783 19.5786 16.0609 20 15 20H6V12Z"
			stroke="currentColor"
			strokeWidth={2}
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
	</svg>
);
export default SvgBold;
