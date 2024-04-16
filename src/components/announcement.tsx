import * as React from "react";

export function Announcement() {
	return (
		<div className="inline-flex max-w-2xl bg-blurple rounded-lg items-center justify-center text-white text-sm py-2 px-3">
			<p>
				<span className="font-bold">Special Offer</span> — Enjoy lifetime
				access. Use our platform for free for a{" "}
				<strong>limited time only</strong>. Take advantage of this opportunity
				to explore all the <strong>features</strong> before we introduce{" "}
				<strong>payment methods</strong>.
			</p>
		</div>
	);
}
