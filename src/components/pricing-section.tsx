import * as React from "react";
import { Check } from "lucide-react";
import { buttonVariants } from "./ui/button";
import { cn } from "~/util/cn";

const premiumTierList = [
	{
		title: "Access to Task Templates",
	},
	{
		title: "Due Dates and Reminders",
	},
	{
		title: "Recurring Tasks",
	},
	{
		title: "Access to Tags",
	},
	{
		title: "Customizable Task Views",
	},
	{
		title: "Bulk Actions",
	},
	{
		title: "Access to Search and Filters",
	},
];

const faqLists = [
	{
		question: "What is tasktrove?",
		answer:
			"tasktrove is a comprehensive task management platform designed to help individuals and teams organize, prioritize, and collaborate on tasks efficiently.",
	},
	{
		question: "What are the limits of the Free tier?",
		answer:
			"The free tier gives you access to the basic features. However, you cannot build a task in the same way as in the premium tier.",
	},
	{
		question: "What's included in the Premium tier?",
		answer:
			"The premium tier gives you access to the advanced task management. You also get full access to unlimited subtasks, priority levels, recurring tasks, collaboration features, and more.",
	},
	{
		question: "Can I access tasktrove on multiple devices?",
		answer:
			"Yes, tasktrove is accessible on multiple devices including desktops, laptops, tablets, and smartphones. Users can stay connected and manage tasks from anywhere with internet access.",
	},
];

export function PricingSection() {
	return (
		<div className="mx-auto container justify-center">
			<div id="pricing">
				<h1 className="text-3xl font-bold leading-none tracking-tighter lg:text-6xl">
					Get Everything. One-time Payment.
				</h1>
				<p className="py-6 text-xl font-light lg:text-2xl">
					Start with a free plan, then unlock all the features for a simple
					one-time payment.
				</p>
			</div>
			<div className="flex flex-col pt-8 justify-center gap-4 lg:flex-row">
				<div className="mx-auto max-w-xl card bg-transparent rounded-lg shadow border border-neutral-200 lg:card-side">
					<div className="card-body">
						<h2 className={cn("card-title", "font-bold text-2xl leading-none")}>
							One-time Payment.
						</h2>
						<p className="py-4">
							Access to all task templates. Unlock all features.
						</p>
						<div className="inline-flex px-4 py-6 bg-transparent border border-neutral-200 rounded-lg items-center justify-center">
							<h1 className="text-4xl font-bold leading-none lg:text-5xl">
								$84
							</h1>
							<div className="ml-2 flex flex-col">
								<p className="text-xs font-medium">one-time payment</p>
								<p className="text-xs text-neutral-500">plus local taxes</p>
							</div>
						</div>
						<div className="py-6 mx-auto flex flex-col justify-center gap-3">
							{premiumTierList.map((item, index) => (
								<div key={index} className="flex items-center justify-center">
									<Check className="w-4" />
									<p className="ml-2">{item.title}</p>
								</div>
							))}
						</div>
						<hr className="border-t border-neutral-300 visible w-full" />
						<div className="mx-auto w-full flex justify-center items-center pt-6">
							<button className={cn(buttonVariants(), "w-full")}>
								Get Started{" "}
								<span className="ml-1 italic">— it&apos;s free</span>
							</button>
						</div>
					</div>
				</div>
				<div
					id="faq"
					className="mx-auto max-w-md flex flex-col items-center justify-center pt-6 gap-4"
				>
					{faqLists.map((item, index) => (
						<div key={index}>
							<h1 className="text-lg font-bold">{item.question}</h1>
							<p className="py-3 text-neutral-500">{item.answer}</p>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
