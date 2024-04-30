import * as React from "react";

export function Announcement() {
	return (
		<div className="inline-flex max-w-2xl bg-teal/60 rounded-xl items-center justify-center text-sm py-1 px-3 animation-pulse">
			<p>
				<span className="font-bold">Special Offer</span> — Enjoy lifetime
				access. Use our platform for free by utilizing our{" "}
				<strong>free tier</strong>.
			</p>
		</div>
	);
}
