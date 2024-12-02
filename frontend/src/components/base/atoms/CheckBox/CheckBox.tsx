import { Checkbox } from "@ark-ui/react";
import { CheckIcon } from "lucide-react";

export const CheckBox = () => {
	return (
		<Checkbox.Root>
			<Checkbox.Label>Checkbox</Checkbox.Label>
			<Checkbox.Control>
				<Checkbox.Indicator>
					<CheckIcon />
				</Checkbox.Indicator>
			</Checkbox.Control>
			<Checkbox.HiddenInput />
		</Checkbox.Root>
	);
};
