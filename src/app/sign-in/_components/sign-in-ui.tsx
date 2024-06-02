import * as React from "react";
import { SiGoogle as Google } from "@icons-pack/react-simple-icons";
import Link from "next/link";
import { buttonVariants } from "~/components/ui/button";
import { cn } from "~/lib/utils";
import { siteConfig } from "~/config/site";

export function SignInUI() {
	return (
		<div
			className={cn(
				"card shadow md:card-side",
				"bg-white rounded-box border border-neutral-300 md:w-[500px]",
			)}
		>
			<div className="card-body">
				<div className="flex">
					<Link
						href="/"
						className="text-lg font-bold leading-none tracking-tighter md:text-2xl"
					>
						{siteConfig.name}
					</Link>
				</div>
				<div className="pt-10 flex flex-col space-y-2">
					<h1 className="text-sm font-semibold leading-5 md:text-lg">
						Sign In
					</h1>
					<p className="text-sm font-light text-neutral-500">
						to continue to{" "}
						<strong className="font-bold">{siteConfig.name}</strong>
					</p>
					<div className="pt-6 flex flex-col items-center gap-2 w-full md:flex-row">
						<button
							className={cn(buttonVariants({ variant: "outline" }), "w-full")}
						>
							<Google className="mr-2 h-4 w-4" />
							<span>Sign In with Google</span>
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
