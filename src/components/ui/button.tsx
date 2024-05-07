import { cva } from "class-variance-authority";

export const buttonVariants = cva(
	"inline-flex px-4 py-2 items-center justify-center rounded-md font-medium text-sm text-center transition-colors focus:outline-none",
	{
		variants: {
			variant: {
				default:
					"bg-slate-900 text-white border-transparent hover:bg-slate-900/90",
				outline: "bg-transparent border border-slate-300 hover:bg-slate-200/90",
				destructive:
					"bg-red-500 text-white border-transparent hover:bg-red-500/90",
				ghost: "bg-transparent border-transparent hover:bg-slate-200/90",
				urlLink:
					"bg-transparent border-transparent underline underline-offset-4",
			},
		},
		defaultVariants: {
			variant: "default",
		},
	},
);
