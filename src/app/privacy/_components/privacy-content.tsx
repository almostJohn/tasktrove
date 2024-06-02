import * as React from "react";

export function PrivacyContent() {
	return (
		<article className="prose text-black">
			<p className="text-black">
				This Privacy Policy describes how your personal information is
				collected, used, and shared when you visit or make a purchase from
				tsktrve.vercel.app (the “Site”).
				<br />
				<br />
				<strong className="text-lg leading-4 text-black">
					Personal Information we collect
				</strong>
				<br />
				<br />
				When you sign-in on the site, we collect the following personal
				information:
				<br />
				<br />
				<span className="inline-block flex-col ml-6">
					<li>Your Google</li>
				</span>
				<br />
				<br />
				We use your <strong className="text-black font-bold">Google</strong> for
				identification and authentication.
				<br />
				<br />
				We <strong className="text-black font-bold">DO NOT</strong> share any
				personal information to third parties.
				<br />
				<br />
				<strong className="text-lg leading-4 text-black">Changes</strong>
				<br />
				<br />
				We may update this privacy policy from time to time in order to reflect,
				for example, changes to our practices or for other operational, legal or
				regulatory reasons.
			</p>
		</article>
	);
}
