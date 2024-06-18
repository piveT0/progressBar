import { ProgressDemo } from '@/components/progressBar';
import { formatNumberGoal } from '@/helpers/format';

export default function Home() {
	const current = 170;
	const goal = 366;
	return (
		<main className="h-screen bg-black text-white">
			<div className='flex justify-center items-center h-screen'>
				<div className="flex items-center gap-1 flex-col">

					<ProgressDemo />
				</div>
			</div>
		</main>
	);
}
