export function isLeapYear(year: number): boolean {
	return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

export function daysInMonth(month: number, year: number): number {
	return new Date(year, month, 0).getDate();
}

export function daysPassedInYear(date: Date): number {
	const year = date.getFullYear();
	const month = date.getMonth() + 1;
	const day = date.getDate();

	let daysPassed = 0;

	for (let i = 1; i < month; i++) {
		daysPassed += daysInMonth(i, year);
	}

	daysPassed += day;

	return daysPassed;
}

export function timesPassedSinceStartOfYear(date: Date): {
	diffInHours: number;
	minutes: number;
	seconds: number;
} {
	const daysPassed = daysPassedInYear(date);

	const diffInHours: number = daysPassed * 24;
	const minutes: number = daysPassed * 60;
	const seconds: number = daysPassed * 24 * 60 * 60;
	return { diffInHours, minutes, seconds };
}

export function weekAndMonthPassed(date: Date): { weekPassed: number; monthPassed: number } {
	const daysPassed = daysPassedInYear(date);
	const weekPassed = daysPassed / 7;
	const monthPassed = daysPassed / 30.44;

	return { weekPassed, monthPassed };
}

export function percentageOfYearPassed(date: Date): number {
	const year = date.getFullYear();
	const totalDays = isLeapYear(year) ? 366 : 365;
	const daysPassed = daysPassedInYear(date);

	return (daysPassed / totalDays) * 100;
}
