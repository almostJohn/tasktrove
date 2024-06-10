import * as React from "react";
import type { Metadata } from "next";
import { SiGoogle as Google } from "@icons-pack/react-simple-icons";
import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
	CardFooter,
} from "~/components/ui/card";
import { siteConfig } from "~/config/site";
import { Button } from "~/components/ui/button";
import Link from "next/link";

export const metadata: Metadata = {
	title: "Sign In",
};

export default function SignInPage() {
	return (
		<>
			<Card className="md:w-[350px]">
				<CardHeader>
					<CardTitle>
						<Link href="/">{siteConfig.name}</Link>
					</CardTitle>
				</CardHeader>
				<CardContent>
					<div className="flex flex-col space-y-2">
						<h1 className="text-lg font-bold leading-tight tracking-tighter md:text-2xl">
							Sign In
						</h1>
						<p className="text-sm font-light text-muted-foreground">
							to continue to{" "}
							<strong className="font-bold">{siteConfig.name}</strong>
						</p>
					</div>
				</CardContent>
				<CardFooter>
					<Button size="lg" variant="outline" className="w-full">
						<Google className="h-5 w-5 mr-2" />
						<span>Sign In with Google</span>
					</Button>
				</CardFooter>
			</Card>
			<div className="pt-6 flex items-center justify-center">
				<p className="text-sm text-center">
					By signing in, you agree to our{" "}
					<Link
						href="/terms"
						className="transition-all font-bold hover:underline underline-offset-1"
					>
						Terms of Service
					</Link>{" "}
					and{" "}
					<Link
						href="/privacy"
						className="transition-all font-bold hover:underline underline-offset-1"
					>
						Privacy Policy
					</Link>
				</p>
			</div>
		</>
	);
}
