import * as React from "react";
import Link from "next/link";
import { SignUp } from "@clerk/nextjs";

export default function Page() {
	return (
		<div className="flex flex-col items-center justify-center space-y-4 pt-8 pb-12">
			<SignUp />
			<div className="max-w-sm text-center text-neutral-500">
				<p className="text-sm tracking-tighter">
					By signing up, you agree to the{" "}
					<Link href="/terms" className="font-bold link link-hover">
						Terms of Service
					</Link>{" "}
					and{" "}
					<Link href="/privacy" className="font-bold link link-hover">
						Privacy Policy
					</Link>
				</p>
			</div>
		</div>
	);
}
