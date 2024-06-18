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

export function percentageOfYearPassed(date: Date): number {
	const year = date.getFullYear();
	const totalDays = isLeapYear(year) ? 366 : 365;
	const daysPassed = daysPassedInYear(date);

	return (daysPassed / totalDays) * 100;
}
