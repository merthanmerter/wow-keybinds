import { useState } from "react";
import { useKeyPress } from "react-use";

export const useShiftPressed = () => {
	const [keyboardShift] = useKeyPress("Shift");
	const [clickShift, setClickShift] = useState(false);
	const isShiftPressed = keyboardShift || clickShift;

	return {
		isShiftPressed,
		setClickShift,
	};
};
