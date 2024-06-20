import { ProgressDemo } from '@/components/progressBar';

export default function Home() {
	return (
		<main className="h-screen bg-black text-white">
			<div className="flex justify-center items-center h-screen">
				<div className="flex items-center gap-1 flex-col">
					<ProgressDemo />
				</div>
			</div>
		</main>
	);
}
