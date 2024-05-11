import { cva } from "class-variance-authority";

export const buttonVariants = cva(
	"inline-flex items-center justify-center text-center px-4 py-2 rounded-md font-medium text-sm transition-colors focus:outline-none",
	{
		variants: {
			variant: {
				default:
					"bg-neutral-900 text-neutral-100 border border-transparent hover:bg-neutral-900/90",
				outline:
					"bg-transparent border border-neutral-300 hover:bg-neutral-200",
				destructive:
					"bg-red-600 text-neutral-100 border border-transparent hover:bg-red-600/90",
				ghost: "bg-transparent border border-transparent hover:bg-neutral-200",
				urlLink:
					"bg-transparent border border-transparent text-neutral-500 underline underline-offset-4 hover:text-neutral-900",
			},
		},
		defaultVariants: {
			variant: "default",
		},
	},
);
