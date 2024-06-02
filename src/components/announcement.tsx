import * as React from "react";
import Link from "next/link";
import { LayoutDashboard, ArrowRight } from "lucide-react";
import { cn } from "~/lib/utils";

export function Announcement() {
	return (
		<Link
			href="/dashboard"
			className={cn(
				"inline-flex items-center rounded-lg px-3 py-1 text-sm font-medium bg-slate-100",
			)}
		>
			<LayoutDashboard className="h-4 w-4 mr-2" />
			<p>Introducing Dashboard</p>
			<ArrowRight className="h-4 w-4 ml-2" />
		</Link>
	);
}
