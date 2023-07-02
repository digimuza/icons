import type { SVGProps } from "react";
const SvgWifiOff = (props: SVGProps<SVGSVGElement>) => (
	<svg
		viewBox="0 0 24 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		{...props}
	>
		<g clipPath="url(#clip0_1027_7168)">
			<path
				d="M1 1L23 23M16.72 11.06C17.5391 11.4598 18.305 11.9603 19 12.55M5 12.55C6.48208 11.3108 8.26587 10.4862 10.17 10.16M10.71 5.05C12.8524 4.87737 15.0076 5.13816 17.047 5.81682C19.0865 6.49548 20.9682 7.57808 22.58 9M1.42 9C2.80717 7.77385 4.3977 6.79923 6.12 6.12M8.53 16.11C9.5452 15.3887 10.7597 15.0013 12.005 15.0013C13.2503 15.0013 14.4648 15.3887 15.48 16.11M12 20H12.01"
				stroke="currentColor"
				strokeWidth={2}
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</g>
		<defs>
			<clipPath id="clip0_1027_7168">
				<rect width={24} height={24} fill="white" />
			</clipPath>
		</defs>
	</svg>
);
export default SvgWifiOff;
