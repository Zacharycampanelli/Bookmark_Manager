import * as RadixCheckbox from '@radix-ui/react-checkbox';

import CheckIcon from "../../assets/svg/CheckIcon";
import styles from "./Checkbox.module.css";

const Checkbox = () => (
	<form>
		<div style={{ display: "flex", alignItems: "center" }}>
			<RadixCheckbox.Root className={styles.Root} defaultChecked id="c1">
				<RadixCheckbox.Indicator className={styles.Indicator}>
					<CheckIcon />
				</RadixCheckbox.Indicator>
			</RadixCheckbox.Root>
			<label className={styles.Label} htmlFor="c1">
				Accept terms and conditions.
			</label>
		</div>
	</form>
);

export default Checkbox;
