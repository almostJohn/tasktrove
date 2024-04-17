import * as React from "react";
import { AccordionItems } from "./accordion-items";

export function HeroSection() {
	return (
		<div className="flex items-center py-12 lg:py-24">
			<div className="flex flex-col items-start space-y-6">
				<h1 className="text-3xl font-bold tracking-tighter lg:text-6xl">
					Frequently Asked Question
				</h1>
				<p className="text-balance">
					a curated collection of answers to frequently asked questions about
					tasktrove. Find quick solutions and insights into common queries,
					helping you make the most out of our platform hassle-free.
				</p>
				<div className="container">
					<AccordionItems />
				</div>
			</div>
		</div>
	);
}
