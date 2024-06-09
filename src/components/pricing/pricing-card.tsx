import * as React from "react";
import Link from "next/link";
import { Check, X } from "lucide-react";
import { cn } from "~/lib/utils";
import { buttonVariants } from "../ui/button";

type PricingCardProps = {
	title: string;
	description: string;
	tag: string;
	price: string;
	priceDescription: string;
	items: PricingCardItems[] | null;
};

type PricingCardItems = {
	title: string;
	isFree?: boolean | null | undefined;
};

export function PricingCard({
	title,
	description,
	tag,
	price,
	priceDescription,
	items,
}: PricingCardProps) {
	return (
		<div className="bg-white rounded-lg shadow-md overflow-hidden">
			<div className="p-6 space-y-4">
				<div>
					<div className="flex items-center justify-between">
						<h3 className="text-2xl font-bold leading-tight tracking-tighter">
							{title}
						</h3>
						<div className="inline-flex items-center justify-center px-3 py-1 rounded-full text-xs font-medium border border-border bg-transparent">
							{tag}
						</div>
					</div>
					<p className="pt-4 font-light text-foreground">{description}</p>
				</div>
				<div className="flex items-baseline space-x-2">
					<span className="text-4xl font-bold">{price}</span>
					<span className="text-lg text-muted-foreground">
						{priceDescription}
					</span>
				</div>
				<ul className="space-y-2 text-muted-foreground">
					{items?.map((item, i) => (
						<li key={i} className="flex items-center">
							{item.isFree === false ? (
								<>
									<X className="h-4 w-4 shrink-0 mr-2 text-primary" />
									<p className="line-through">{item.title}</p>
								</>
							) : (
								<>
									<Check className="h-4 w-4 shrink-0 mr-2 text-primary" />
									<p>{item.title}</p>
								</>
							)}
						</li>
					))}
				</ul>
			</div>
			<div className="bg-gray-100 px-6 py-4">
				<Link
					href="/sign-in"
					className={cn(buttonVariants({ size: "lg" }), "w-full")}
				>
					Get Started
				</Link>
			</div>
		</div>
	);
}
