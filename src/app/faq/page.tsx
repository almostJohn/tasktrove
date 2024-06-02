import * as React from "react";
import { FAQ } from "./_components/faq";

export default function Page() {
	return (
		<>
			<div className="flex flex-col items-center justify-center space-y-6">
				<div className="text-center">
					<h1 className="text-3xl font-bold leading-none tracking-tighter md:text-5xl">
						Frequently Asked Question
					</h1>
					<p className="py-6 text-lg font-light text-slate-700">
						Find answers to common questions about our website, simplifying your
						queries for a smoother experience.
					</p>
				</div>
				<div className="flex flex-col items-center justify-center">
					<FAQ />
				</div>
			</div>
		</>
	);
}
