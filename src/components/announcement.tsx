import * as React from "react";
import Link from "next/link";
import { LayoutDashboard, ArrowRight } from "lucide-react";
import { cn } from "~/lib/utils";
import { Separator } from "~/components/ui/separator";

export function Announcement() {
	return (
		<Link
			href="/dashboard"
			className={cn(
				"inline-flex bg-muted items-center rounded-lg px-3 py-1 text-sm font-medium",
			)}
		>
			<LayoutDashboard className="h-4 w-4" />{" "}
			<Separator className="mx-2 h-4" orientation="vertical" />{" "}
			<span>Introducing Dashboard</span>
			<ArrowRight className="h-4 w-4 ml-1" />
		</Link>
	);
}
