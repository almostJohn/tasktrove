import * as React from "react";

export function PrivacyContent() {
	return (
		<article className="prose text-neutral-900">
			<p className="text-neutral-900">
				This Privacy Policy describes how your personal information is
				collected, used, and shared when you visit or make a purchase from
				tsktrve.vercel.app (the “Site”).
				<br />
				<br />
				<strong className="text-lg leading-4 text-neutral-900">
					Personal Information we collect
				</strong>
				<br />
				<br />
				When you sign-in on the site, we collect the following personal
				information:
				<br />
				<br />
				<span className="inline-flex flex-col ml-6">
					<li>
						Your email address (currently{" "}
						<strong className="text-neutral-900">Google</strong> is our only
						provider)
					</li>
				</span>
				<br />
				<br />
				We use your email address for identification and authentication.
				<br />
				<br />
				You will also receive authentication emails at the email address
				provided.
				<br />
				<br />
				We <strong className="text-neutral-900">DO NOT</strong> share any
				personal information to third parties.
				<br />
				<br />
				<strong className="text-lg leading-4 text-neutral-900">Changes</strong>
				<br />
				<br />
				We may update this privacy policy from time to time in order to reflect,
				for example, changes to our practices or for other operational, legal or
				regulatory reasons.
			</p>
		</article>
	);
}