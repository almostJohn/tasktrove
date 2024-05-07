import * as React from "react";

export function Announcement() {
	return (
		<div className="inline-flex max-w-2xl bg-teal/60 rounded-xl items-center justify-center text-sm py-1 px-3 animation-pulse">
			<p>
				<strong>Limited Offer</strong> — Lifetime access for just{" "}
				<span className="line-through font-bold">$84</span> <strong>$20</strong>
				. One-time Payment. <strong>Pay once. Use forever.</strong>
			</p>
		</div>
	);
}
