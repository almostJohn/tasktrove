import * as React from "react";
import type { Metadata } from "next";
import { HeroSection } from "./_components/hero-section";

export const metadata: Metadata = {
	title: "Privacy Policy",
};

export default function Page() {
	return (
		<main className="mx-auto max-w-2xl container flex flex-col items-center p-4">
			<HeroSection />
		</main>
	);
}
