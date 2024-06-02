import { cva } from "class-variance-authority";

export const buttonVariants = cva(
	"inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
	{
		variants: {
			variant: {
				default: "bg-neutral-900 text-neutral-100 hover:bg-black",
				destructive: "bg-red-600 text-neutral-100 hover:bg-red-600/80",
				outline: "border border-slate-200 bg-transparent hover:bg-slate-200",
				secondary: "bg-slate-100 text-neutral-900 hover:bg-slate-100/80",
				ghost: "hover:bg-slate-200",
				link: "text-base underline-offset-4 hover:underline",
			},
			size: {
				default: "h-10 px-4 py-2",
				sm: "h-9 rounded-md px-3",
				lg: "h-11 rounded-md px-8",
				icon: "h-10 w-10",
			},
		},
		defaultVariants: {
			variant: "default",
			size: "default",
		},
	},
);
