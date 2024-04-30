import * as React from "react";
import { MainNav } from "./main-nav/main-nav";
import { MobileNav } from "./mobile-nav/mobile-nav";

export function SiteHeader() {
	return (
		<>
			<MainNav />
			<MobileNav />
		</>
	);
}
