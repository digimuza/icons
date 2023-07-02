import type { SVGProps } from "react";
const SvgCloudLightning = (props: SVGProps<SVGSVGElement>) => (
	<svg
		viewBox="0 0 24 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		{...props}
	>
		<g clipPath="url(#clip0_1027_7282)">
			<path
				d="M19 16.9C20.2151 16.6532 21.2953 15.9638 22.0307 14.9655C22.7661 13.9671 23.1043 12.7312 22.9797 11.4975C22.8551 10.2638 22.2765 9.12046 21.3563 8.28937C20.4361 7.45828 19.2399 6.99875 18 6.99999H16.74C16.4087 5.71731 15.764 4.53698 14.8639 3.56498C13.9638 2.59298 12.8363 1.85972 11.5828 1.43106C10.3293 1.00239 8.98897 0.891726 7.68213 1.109C6.37529 1.32628 5.14287 1.86469 4.0955 2.6759C3.04814 3.48711 2.21862 4.54573 1.68143 5.75671C1.14424 6.96768 0.916185 8.29311 1.01775 9.61399C1.11931 10.9349 1.54731 12.2098 2.26332 13.3245C2.97932 14.4391 3.96093 15.3584 5.12 16M13 11L9 17H15L11 23"
				stroke="currentColor"
				strokeWidth={2}
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</g>
		<defs>
			<clipPath id="clip0_1027_7282">
				<rect width={24} height={24} fill="white" />
			</clipPath>
		</defs>
	</svg>
);
export default SvgCloudLightning;
