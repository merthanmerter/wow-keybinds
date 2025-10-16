import { useState } from "react";
import { useKeyPress } from "react-use";
import { useIsMobile } from "@/hooks/is-mobile";

export const useShiftPressed = () => {
	const [keyboardShift] = useKeyPress("Shift");
	const [clickShift, setClickShift] = useState(false);
	const isMobile = useIsMobile();
	const isShiftPressed = keyboardShift || clickShift;

	const toggleClickShift = () => {
		setClickShift((prev) => !prev);
	};

	return {
		isShiftPressed,
		setClickShift,
		toggleClickShift,
		isMobile,
	};
};
