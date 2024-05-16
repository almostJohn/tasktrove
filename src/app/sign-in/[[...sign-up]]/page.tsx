import * as React from "react";
import Link from "next/link";
import { SignIn } from "@clerk/nextjs";

export default function Page() {
	return (
		<div className="flex flex-col items-center justify-center space-y-4 pt-8 pb-12">
			<SignIn />
			<div className="max-w-sm text-center text-neutral-500">
				<Link
					href="/"
					className="text-sm font-bold tracking-tighter link link-hover"
				>
					Back to home
				</Link>
			</div>
		</div>
	);
}
