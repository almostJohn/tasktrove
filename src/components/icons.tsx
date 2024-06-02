import * as React from "react";

type IconProps = React.HTMLAttributes<SVGElement>;

export const Icons = {
	menu: (props: IconProps) => {
		return (
			<svg
				stroke="currentColor"
				fill="currentColor"
				strokeWidth="0"
				viewBox="0 0 20 20"
				focusable="false"
				className="h-5 w-5"
				aria-hidden="true"
				xmlns="http://www.w3.org/2000/svg"
				{...props}
			>
				<path
					fillRule="evenodd"
					d="M3 7a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 13a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
					clipRule="evenodd"
				></path>
			</svg>
		);
	},
};
