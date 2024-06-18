'use client';

import * as React from 'react';
import * as ProgressPrimitive from '@radix-ui/react-progress';

import { cn } from '@/lib/utils';
import { daysPassedInYear } from '@/helpers/yearPercent';

const today = new Date();
const daysPasses = daysPassedInYear(today);

const Progress = React.forwardRef<
	React.ElementRef<typeof ProgressPrimitive.Root>,
	React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>
>(({ className, value, ...props }, ref) => {
	const [animatedValue, setAnimatedValue] = React.useState(0);

	React.useEffect(() => {
		let start = 0;
		const duration = 5000;
		const increment = daysPasses / (duration / 16);

		const animate = () => {
			start += increment;
			if (start < daysPasses) {
				setAnimatedValue(Math.round(start));
				requestAnimationFrame(animate);
			} else {
				setAnimatedValue(daysPasses);
			}
		};

		animate();
	}, []);

	return (
		<ProgressPrimitive.Root
			ref={ref}
			className={cn(
				'relative h-4 w-full overflow-hidden rounded-full bg-secondary',
				className
			)}
			{...props}
		>
			<ProgressPrimitive.Indicator
				className="flex h-full w-full flex-1 bg-primary transition-transform ease-in-out justify-end items-center"
				style={{
					transform: `translateX(-${100 - (value || 0)}%)`,
					transitionDuration: '5000ms',
				}}
			>
				<p className="pr-2">{animatedValue} dias</p>
			</ProgressPrimitive.Indicator>
		</ProgressPrimitive.Root>
	);
});

Progress.displayName = ProgressPrimitive.Root.displayName;

export { Progress };
