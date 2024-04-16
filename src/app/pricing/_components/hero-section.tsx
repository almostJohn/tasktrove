import * as React from "react";
import { Check, CircleAlert } from "lucide-react";
import { cn } from "~/util/cn";

const featuresList = [
	{
		title: "Advance Task Management",
	},
	{
		title: "Customization Options",
	},
	{
		title: "Cloud Sync and Backup",
	},
	{
		title: "Ad-free Experience",
	},
	{
		title: "Offline Access",
	},
];

export function HeroSection() {
	return (
		<div className="flex items-center justify-center py-12 pl-2 pr-5 lg:py-24">
			<div className="flex flex-col items-start space-y-6">
				<h1 className="text-3xl font-bold tracking-tighter lg:text-6xl">
					Get Everything. One-time Payment.
				</h1>
				<p className="text-balance">
					Start with a free plan, then unlock all the features for a simple
					one-time payment.
				</p>
				<div className="card bg-neutral-200 shadow-xl lg:card-side lg:w-full">
					<div className="card-body">
						<div className="flex flex-col space-y-1 text-sm leading-none">
							<div className="inline-flex py-1 px-2 rounded-lg bg-transparent border border-neutral-400 text-xs/relaxed text-center font-medium mb-4">
								For now, Enjoy our platform for free.
							</div>
							<h1 className="text-2xl font-bold">One-time Payment.</h1>
							<p>Unlock all features.</p>
							<ul className="flex flex-col pt-6 space-y-4">
								{featuresList.map((item, index) => (
									<li
										className="inline-flex items-center justify-center"
										key={index}
									>
										<Check className="mr-2" />
										<p className="text-nowrap">{item.title}</p>
									</li>
								))}
							</ul>
							<div className="pt-12 card-actions justify-center w-full">
								<button
									className={cn(
										"inline-flex border-transparent bg-lightBlurple px-6 py-2 w-full rounded-lg items-center justify-center text-center text-white text-sm font-medium transition-colors hover:bg-blurple/90",
										"btn-disabled",
									)}
								>
									<CircleAlert className="h-4 w-4 mr-1" /> Get Started —{" "}
									<span className="italic">it&apos;s free</span>
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
