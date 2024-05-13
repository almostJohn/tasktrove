import * as React from "react";
import { MainDashboard } from "./_components/main-dashboard";
import { MobileDashboard } from "./_components/mobile-dashboard";

export default function Page() {
	return (
		<div className="container mx-auto px-4">
			<MainDashboard />
			<MobileDashboard />
		</div>
	);
}
