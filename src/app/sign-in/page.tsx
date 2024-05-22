import * as React from "react";
import Link from "next/link";
import { SignInUI } from "./_components/sign-in-ui";

export default function Page() {
	return (
		<div className="flex flex-col items-center">
			<SignInUI />
			<div className="pt-5 mx-auto flex items-center">
				<div className="max-w-sm">
					<p className="text-xs font-light md:text-sm">
						By signing in, you agree to our{" "}
						<Link href="/terms" className="link link-hover font-bold">
							Terms of Service
						</Link>
					</p>
				</div>
			</div>
		</div>
	);
}
