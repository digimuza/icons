import type { SVGProps } from "react";
const SvgPaperclip = (props: SVGProps<SVGSVGElement>) => (
	<svg
		viewBox="0 0 24 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		{...props}
	>
		<path
			d="M21.44 11.05L12.25 20.24C11.1242 21.3659 9.5972 21.9984 8.00502 21.9984C6.41283 21.9984 4.88586 21.3659 3.76002 20.24C2.63417 19.1142 2.00168 17.5872 2.00168 15.995C2.00168 14.4029 2.63417 12.8759 3.76002 11.75L12.95 2.56004C13.7006 1.80948 14.7186 1.38782 15.78 1.38782C16.8415 1.38782 17.8595 1.80948 18.61 2.56004C19.3606 3.3106 19.7822 4.32859 19.7822 5.39004C19.7822 6.4515 19.3606 7.46948 18.61 8.22004L9.41002 17.41C9.03473 17.7853 8.52574 17.9962 7.99502 17.9962C7.46429 17.9962 6.9553 17.7853 6.58002 17.41C6.20473 17.0348 5.9939 16.5258 5.9939 15.995C5.9939 15.4643 6.20473 14.9553 6.58002 14.58L15.07 6.10004"
			stroke="currentColor"
			strokeWidth={2}
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
	</svg>
);
export default SvgPaperclip;
