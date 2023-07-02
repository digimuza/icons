import type { SVGProps } from "react";
const SvgYoutube = (props: SVGProps<SVGSVGElement>) => (
	<svg
		viewBox="0 0 24 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		{...props}
	>
		<path
			d="M22.54 6.42C22.4212 5.94541 22.1793 5.51057 21.8387 5.15941C21.498 4.80824 21.0708 4.55318 20.6 4.42C18.88 4 12 4 12 4C12 4 5.12001 4 3.40001 4.46C2.92925 4.59318 2.50198 4.84824 2.16135 5.19941C1.82072 5.55057 1.5788 5.98541 1.46001 6.46C1.14522 8.20556 0.991243 9.97631 1.00001 11.75C0.988786 13.537 1.14277 15.3213 1.46001 17.08C1.59097 17.5398 1.83831 17.9581 2.17815 18.2945C2.51799 18.6308 2.93883 18.8738 3.40001 19C5.12001 19.46 12 19.46 12 19.46C12 19.46 18.88 19.46 20.6 19C21.0708 18.8668 21.498 18.6118 21.8387 18.2606C22.1793 17.9094 22.4212 17.4746 22.54 17C22.8524 15.2676 23.0063 13.5103 23 11.75C23.0112 9.96295 22.8572 8.1787 22.54 6.42Z"
			stroke="currentColor"
			strokeWidth={2}
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
		<path
			d="M9.75001 15.02L15.5 11.75L9.75001 8.48V15.02Z"
			stroke="currentColor"
			strokeWidth={2}
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
	</svg>
);
export default SvgYoutube;