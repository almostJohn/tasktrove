import * as React from "react";
import type { Metadata } from "next";
import { AccordionItems } from "./_components/accordion-items";

export const metadata: Metadata = {
	title: "FAQ",
};

export default function Page() {
	return (
		<div className="mx-auto max-w-6xl container flex flex-col justify-center pt-8 pb-24 px-6 lg:pt-16 lg:pb-40">
			<div className="flex flex-col">
				<div className="px-4">
					<h1 className="text-3xl font-bold leading-none tracking-tighter lg:text-5xl">
						Frequently Asked Question.
					</h1>
					<p className="text-xl font-light py-6 lg:text-2xl">
						a curated collection of answers to frequently asked questions about
						tasktrove.
					</p>
				</div>
				<AccordionItems />
			</div>
		</div>
	);
}
