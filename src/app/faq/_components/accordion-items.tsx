import * as React from "react";

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

export function AccordionItems() {
	return (
		<div className="flex flex-col items-center justify-center w-full gap-4">
			{faqLists.map((item, index) => (
				<div key={index} className="collapse collapse-arrow bg-neutral-200">
					<input type="radio" name="accordio" defaultChecked />
					<div className="collapse-title text-xl font-bold">
						{item.question}
					</div>
					<div className="collapse-content">
						<p>{item.answer}</p>
					</div>
				</div>
			))}
		</div>
	);
}
