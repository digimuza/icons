import type { SVGProps } from "react";
const SvgSunset = (props: SVGProps<SVGSVGElement>) => (
	<svg
		viewBox="0 0 24 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		{...props}
	>
		<path
			d="M17 18C17 16.6739 16.4732 15.4021 15.5355 14.4645C14.5979 13.5268 13.3261 13 12 13C10.6739 13 9.40215 13.5268 8.46447 14.4645C7.52678 15.4021 7 16.6739 7 18M12 9V2M12 9L16 5M12 9L8 5M4.22 10.22L5.64 11.64M1 18H3M21 18H23M18.36 11.64L19.78 10.22M23 22H1"
			stroke="currentColor"
			strokeWidth={2}
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
	</svg>
);
export default SvgSunset;
