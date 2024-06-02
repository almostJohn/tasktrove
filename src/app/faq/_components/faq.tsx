import * as React from "react";
import { cn } from "~/lib/utils";

export function FAQ() {
	return (
		<>
			<div
				className={cn(
					"collapse collapse-arrow border-t border-slate-300 bg-white",
					"rounded-none",
				)}
			>
				<input type="radio" name="faq-accordion" defaultChecked />
				<div className="collapse-title text-lg font-bold leading-none tracking-tight">
					What are the limits of the Basic plan?
				</div>
				<div className="collapse-content">
					<p className="text-sm leading-4">
						The Basic plan gives you access to basic task management. However,
						you cannot create tasks in the same way as in the Pro plan.
					</p>
				</div>
			</div>
			<div
				className={cn(
					"collapse collapse-arrow border-t border-slate-300 bg-white",
					"rounded-none",
				)}
			>
				<input type="radio" name="faq-accordion" />
				<div className="collapse-title text-lg font-bold leading-none tracking-tight">
					What&apos;s included in the Pro plan?
				</div>
				<div className="collapse-content">
					<p className="text-sm leading-4">
						The Pro plan gives you access to the task templates and advanced
						task management features.
					</p>
				</div>
			</div>
			<div
				className={cn(
					"collapse collapse-arrow border-t border-slate-300 bg-white",
					"rounded-none",
				)}
			>
				<input type="radio" name="faq-accordion" />
				<div className="collapse-title text-lg font-bold leading-none tracking-tight">
					Is tasktrove&apos;s platform secure for sharing sensitive information?
				</div>
				<div className="collapse-content">
					<p className="text-sm leading-4">
						Yes, tasktrove takes the security and confidentiality of your
						information very seriously. The platform employs industry-standard
						encryption protocols to protect your data and restricts access to
						authorized personnel only. You can trust tasktrove with your
						sensitive tasks and information.
					</p>
				</div>
			</div>
			<div
				className={cn(
					"collapse collapse-arrow border-t border-slate-300 bg-white",
					"rounded-none",
				)}
			>
				<input type="radio" name="faq-accordion" />
				<div className="collapse-title text-lg font-bold leading-none tracking-tight">
					How does tasktrove handle deadlines and turnaround times?
				</div>
				<div className="collapse-content">
					<p className="text-sm leading-4">
						tasktrove understands the importance of deadlines and works
						diligently to meet them. When you submit a task, you can specify
						your deadline, and tasktrove will do its best to deliver the
						completed task within that timeframe. If there are any unforeseen
						delays, you will be notified promptly, and alternative arrangements
						will be made if necessary. Your time is valuable, and tasktrove is
						dedicated to helping you meet your goals on schedule.
					</p>
				</div>
			</div>
			<div
				className={cn(
					"collapse collapse-arrow border-t border-slate-300 bg-white",
					"rounded-none",
				)}
			>
				<input type="radio" name="faq-accordion" />
				<div className="collapse-title text-lg font-bold leading-none tracking-tight">
					What payment method do tasktrove accept?
				</div>
				<div className="collapse-content">
					<p className="text-sm leading-4">
						We accept credit cards and PayPal. In the future, we will be more
						open to other payment methods for other countries to adapt to.
					</p>
				</div>
			</div>
		</>
	);
}
