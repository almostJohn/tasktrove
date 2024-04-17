import * as React from "react";
import type { Metadata } from "next";
import { HeroSection } from "./_components/hero-section";

export const metadata: Metadata = {
	title: "FAQ",
};

export default function Page() {
	return (
		<main className="container px-3">
			<HeroSection />
		</main>
	);
}
