import * as React from "react";
import { HeroSection } from "~/components/hero-section";
import { PricingSection } from "~/components/pricing-section";

export default function IndexPage() {
	return (
		<div className="mx-auto max-w-6xl container flex flex-col justify-center pt-8 pb-24 px-6 lg:pt-16 lg:pb-40">
			<HeroSection />
			<hr className="border-t border-neutral-200 w-full my-8 lg:my-24" />
			<PricingSection />
		</div>
	);
}
