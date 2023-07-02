import type { SVGProps } from "react";
const SvgCloudDrizzle = (props: SVGProps<SVGSVGElement>) => (
	<svg
		viewBox="0 0 24 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		{...props}
	>
		<g clipPath="url(#clip0_1027_7239)">
			<path
				d="M7.99997 19V21M7.99997 13V15M16 19V21M16 13V15M12 21V23M12 15V17M20 16.58C21.0512 16.1196 21.9121 15.3116 22.4381 14.2916C22.964 13.2715 23.1231 12.1016 22.8886 10.9782C22.654 9.85478 22.0402 8.84623 21.15 8.12185C20.2599 7.39748 19.1476 7.00137 18 7.00002H16.74C16.423 5.77254 15.8188 4.63797 14.9773 3.68982C14.1357 2.74167 13.0809 2.00709 11.8997 1.54664C10.7186 1.08619 9.44488 0.913035 8.18365 1.04146C6.92243 1.16989 5.70978 1.59622 4.64567 2.2853C3.58155 2.97439 2.69644 3.9065 2.06328 5.00482C1.43012 6.10313 1.06704 7.33619 1.00398 8.60237C0.940923 9.86855 1.17968 11.1316 1.70058 12.2874C2.22147 13.4432 3.00959 14.4586 3.99997 15.25"
				stroke="currentColor"
				strokeWidth={2}
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</g>
		<defs>
			<clipPath id="clip0_1027_7239">
				<rect width={24} height={24} fill="white" />
			</clipPath>
		</defs>
	</svg>
);
export default SvgCloudDrizzle;
