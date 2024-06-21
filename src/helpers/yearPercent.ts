export function isLeapYear(year: number): boolean {
	return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

export function daysPassedInYear(date: Date): number {
	const year = date.getFullYear();
	const month = date.getMonth() + 1;
	const day = date.getDate();
	
	function daysInMonth(month: number, year: number): number {
		return new Date(year, month, 0).getDate();
	}

	let daysPassed = 0;
	
	for (let i = 1; i < month; i++) {
		daysPassed += daysInMonth(i, year);
	}

	daysPassed += day;

	return daysPassed;
}

export function timePassedOnYear(date: Date) {
	const now = date.getTime();
	
	const year = date.getFullYear();
	
	const startOfYear = new Date(year, 0, 1).getTime();
	const diff = now - startOfYear;
	
	const seconds = diff / 1000;
	const minutes = seconds / 60;
	const hours = minutes / 60;
	const days = hours / 24;
	const months = days / 30.44;
	const weeks = days / 7;
	
	const totalDays = isLeapYear(year) ? 366 : 365;
	const percentage = (days / totalDays) * 100

	return {
		hours,
		minutes,
		seconds,
		days,
		weeks,
		months,
		percentage
	};
}
