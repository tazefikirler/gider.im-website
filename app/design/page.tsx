import { ContestAttendees } from "@/components/section/contest-attendees";
import { ContestFinalists } from "@/components/section/contest-finalists";
import { ContestVoteCta } from "@/components/section/contest-vote-cta";
import { Supporters } from "@/components/section/supporters";

export default function Home() {
	return (
		<>
			<ContestFinalists />
			<ContestVoteCta />
			<div className="mt-12">
				<Supporters />
			</div>
			<ContestAttendees />

			<p className="text-muted-foreground text-sm text-center mb-16">
				<a
					href="https://www.flaticon.com/authors/freepik"
					title="Freepik Icons"
				>
					Icons created by Freepik - Flaticon
				</a>
			</p>
		</>
	);
}
