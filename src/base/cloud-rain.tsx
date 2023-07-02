import type { SVGProps } from "react";
const SvgCloudRain = (props: SVGProps<SVGSVGElement>) => (
	<svg
		viewBox="0 0 24 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		{...props}
	>
		<g clipPath="url(#clip0_1027_7087)">
			<path
				d="M16 13V21M8 13V21M12 15V23M20 16.58C21.0512 16.1195 21.9121 15.3115 22.4381 14.2915C22.9641 13.2715 23.1231 12.1016 22.8886 10.9781C22.6541 9.85472 22.0402 8.84617 21.15 8.12179C20.2599 7.39742 19.1476 7.00131 18 6.99996H16.74C16.423 5.77248 15.8189 4.63791 14.9773 3.68976C14.1358 2.74161 13.0809 2.00703 11.8998 1.54658C10.7186 1.08612 9.44491 0.912974 8.18368 1.0414C6.92246 1.16983 5.70981 1.59615 4.6457 2.28524C3.58158 2.97433 2.69647 3.90644 2.06331 5.00475C1.43015 6.10307 1.06708 7.33613 1.00401 8.60231C0.940954 9.86849 1.17971 11.1315 1.70061 12.2873C2.2215 13.4431 3.00962 14.4585 4 15.25"
				stroke="currentColor"
				strokeWidth={2}
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</g>
		<defs>
			<clipPath id="clip0_1027_7087">
				<rect width={24} height={24} fill="white" />
			</clipPath>
		</defs>
	</svg>
);
export default SvgCloudRain;
