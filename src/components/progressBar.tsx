'use client';

import * as React from 'react';
import { Progress } from '@/components/ui/progress';
import { percentageOfYearPassed } from '@/helpers/yearPercent';

export function ProgressDemo() {
	const today: Date = new Date();

	const percentProgress = percentageOfYearPassed(today);

	const [progress, setProgress] = React.useState<number>(0);

	React.useEffect(() => {
		const timer = setTimeout(() => setProgress(percentProgress), 0);
		return () => clearTimeout(timer);
	}, [percentProgress]);

	return (
		<div className="flex flex-col justify-center items-center gap-2">
			<h1 className="text-2xl">Porcentagem do ano: {percentProgress.toFixed(2)}%</h1>

			<Progress value={progress} className="w-96 h-8" />
		</div>
	);
}
