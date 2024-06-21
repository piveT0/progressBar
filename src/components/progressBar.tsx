'use client';

import React, {useState, useEffect} from 'react';
import { Progress } from '@/components/ui/progress';
import {
	timePassedOnYear,
} from '@/helpers/yearPercent';

export function ProgressDemo() {
	const [progress, setProgress] = useState<number>(0);
	const [timePassed, setTimePassed] = useState<{
		hours: number;
		minutes: number;
		seconds: number;
		days: number;
		weeks: number;
		months: number;
		percentage: number;
	}>({
		hours: 0,
		minutes: 0,
		seconds: 0,
		days: 0,
		weeks: 0,
		months: 0,
		percentage: 0,
	});

	useEffect(() => {
		const interval = setInterval(() => {
			const date = new Date();

			const timePassed = timePassedOnYear(date);

			setTimePassed(timePassed);
		}, 1000);
		
		return () => clearInterval(interval);
	}, []);
	
	
	useEffect(() => {
		setProgress(timePassed.percentage);
	}, [timePassed.percentage]);

	return (
		<div className="flex flex-col justify-center items-center gap-2 ">
			<span className="self-start w-full">
				<h1 className="text-2xl text-[#16A34A] font-semibold text-center">
					Porcentagem do ano: {timePassed.percentage.toFixed(2)}%
				</h1>
				<h1 className="text-2xl text-[#ccc]">Horas passadas: {timePassed.hours.toFixed(0)}</h1>
				<h1 className="text-2xl text-[#ccc]">Minutos passados: {timePassed.minutes.toFixed(0)}</h1>
				<h1 className="text-2xl text-[#ccc]">Segundos passados: {timePassed.seconds.toFixed(0)}</h1>
				<h1 className="text-2xl text-[#ccc]">
					Semanas passadas: {timePassed.weeks.toFixed(2)}
				</h1>
				<h1 className="text-2xl text-[#ccc]">
					Meses passados: {timePassed.months.toFixed(2)}
				</h1>
			</span>

			<Progress value={progress} className="w-96 h-8" />
		</div>
	);
}
