import { Kbd } from "@/components/ui/kbd";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";

interface Keybind {
	key: string;
	action: string;
}

const keybinds: Keybind[] = [
	{ key: "Q", action: "1st Priority" },
	{ key: "E", action: "1st Priority" },
	{ key: "R", action: "1st Priority" },
	{ key: "F", action: "1st Priority" },
	{ key: "S", action: "1st Priority" },
	{ key: "` (Tilde)", action: "Swap Actions" },
	{ key: "1", action: "2nd Priority" },
	{ key: "2", action: "2nd Priority" },
	{ key: "3", action: "2nd Priority" },
	{ key: "4", action: "2nd Priority" },
	{ key: "Space", action: "God Button" },
	{ key: "Mouse Wheel Up", action: "Interrupt / Purge" },
	{ key: "Mouse Wheel Down", action: "Interrupt" },
	{ key: "Shift + Mouse Wheel Up", action: "Utility / Movement" },
	{ key: "Shift + Mouse Wheel Down", action: "Utility / Movement" },
	{ key: "Mouse 4", action: "Jump" },
	{ key: "Mouse 5", action: "Back-Strafe" },
	{ key: "Z", action: "Mount" },
	{ key: "X", action: "CD / Utility" },
	{ key: "C", action: "CD / Utility" },
	{ key: "V", action: "CD / Utility" },
	{ key: "Caps Lock", action: "CD / Utility" },
	{ key: "SHIFT+Q", action: "CD / Utility" },
	{ key: "SHIFT+E", action: "CD / Utility" },
	{ key: "SHIFT+Space", action: "CD / Utility" },
	{ key: "SHIFT+F", action: "CD / Utility" },
	{ key: "SHIFT+C", action: "CD / Utility" },
	{ key: "CTRL+C", action: "Character Pane" },
	{ key: "Numpad -", action: "Zoom Out" },
	{ key: "Numpad +", action: "Zoom In" },
	{ key: "T", action: "Interact With Target" },
];

export function KeybindsTable() {
	return (
		<div className="bg-card p-6 rounded-lg">
			<h3 className="text-xl font-bold text-yellow-400 mb-4">
				Keybinds Reference
			</h3>
			<Table>
				<TableHeader>
					<TableRow>
						<TableHead className="text-yellow-400">Key</TableHead>
						<TableHead className="text-yellow-400">Action</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					{keybinds.map((keybind) => (
						<TableRow key={keybind.key}>
							<TableCell className="font-medium">
								<Kbd>{keybind.key}</Kbd>
							</TableCell>
							<TableCell>{keybind.action}</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</div>
	);
}
