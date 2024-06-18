export function formatNumberGoal(amount: number): string {
	const rounded = Math.floor(amount / 100) / 10;
	const formatted = rounded.toFixed(1);
	return formatted + 'K';
}