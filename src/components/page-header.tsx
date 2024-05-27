import * as React from "react";
import { cn } from "~/util/cn";

export function PageHeader({
	className,
	children,
	...props
}: React.HTMLAttributes<HTMLDivElement>) {
	return (
		<section className={cn("hero px-4 py-12", className)} {...props}>
			{children}
		</section>
	);
}

export function PageHeaderContent({
	className,
	children,
	...props
}: React.HTMLAttributes<HTMLDivElement>) {
	return (
		<div className={cn("hero-content text-center", className)} {...props}>
			{children}
		</div>
	);
}

export function PageHeaderBody({
	className,
	children,
	...props
}: React.HTMLAttributes<HTMLDivElement>) {
	return (
		<div className={cn("max-w-md", className)} {...props}>
			{children}
		</div>
	);
}

export function PageHeaderHeading({
	className,
	...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
	return (
		<h1
			className={cn(
				"mt-5 text-3xl font-bold leading-tight tracking-tighter md:text-5xl lg:leading-[1.1]",
				className,
			)}
			{...props}
		/>
	);
}

export function PageHeaderDescription({
	className,
	...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
	return (
		<p
			className={cn("py-6 text-lg font-light text-neutral-500", className)}
			{...props}
		/>
	);
}

export function PageActions({
	className,
	...props
}: React.HTMLAttributes<HTMLDivElement>) {
	return (
		<div
			className={cn(
				"flex items-center justify-center w-full gap-4 pb-12",
				className,
			)}
			{...props}
		/>
	);
}
