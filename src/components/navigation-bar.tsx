import * as React from "react";
import { cn } from "~/lib/utils";

export function NavigationBar({
	className,
	children,
	...props
}: React.HTMLAttributes<HTMLDivElement>) {
	return (
		<header className={cn("navbar", className)} {...props}>
			{children}
		</header>
	);
}

export function NavigationBarStart({
	className,
	children,
	...props
}: React.HTMLAttributes<HTMLDivElement>) {
	return (
		<div className={cn("navbar-start", className)} {...props}>
			{children}
		</div>
	);
}

export function NavigationBarCenter({
	className,
	children,
	...props
}: React.HTMLAttributes<HTMLDivElement>) {
	return (
		<div className={cn("navbar-center", className)} {...props}>
			{children}
		</div>
	);
}

export function NavigationBarEnd({
	className,
	children,
	...props
}: React.HTMLAttributes<HTMLDivElement>) {
	return (
		<div className={cn("navbar-end", className)} {...props}>
			{children}
		</div>
	);
}
