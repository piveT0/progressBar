'use client';

import * as React from 'react';
import { Progress } from '@/components/ui/progress';
import {
	daysPassedInYear,
	timesPassedSinceStartOfYear,
	percentageOfYearPassed,
	weekAndMonthPassed,
} from '@/helpers/yearPercent';

export function ProgressDemo() {
	const today: Date = new Date();

	const percentProgress = percentageOfYearPassed(today);
	const timesPassed = timesPassedSinceStartOfYear(today);
	const monthAndWeekPassed = weekAndMonthPassed(today);

	const [progress, setProgress] = React.useState<number>(0);

	React.useEffect(() => {
		const timer = setTimeout(() => setProgress(percentProgress), 0);
		return () => clearTimeout(timer);
	}, [percentProgress]);

	return (
		<div className="flex flex-col justify-center items-center gap-2 ">
			<span className='self-start w-full'>
				<h1 className="text-2xl text-[#16A34A] font-semibold text-center">
					Porcentagem do ano: {percentProgress.toFixed(2)}%
				</h1>
				<h1 className="text-2xl text-[#ccc]">Horas passadas: {timesPassed.diffInHours}</h1>
				<h1 className="text-2xl text-[#ccc]">Minutos passados: {timesPassed.minutes}</h1>
				<h1 className="text-2xl text-[#ccc]">Segundos passados: {timesPassed.seconds}</h1>
				<h1 className="text-2xl text-[#ccc]">
					Semanas passadas: {monthAndWeekPassed.weekPassed.toFixed(2)}
				</h1>
				<h1 className="text-2xl text-[#ccc]">
					Meses passados: {monthAndWeekPassed.monthPassed.toFixed(2)}
				</h1>
			</span>

			<Progress value={progress} className="w-96 h-8" />
		</div>
	);
}
